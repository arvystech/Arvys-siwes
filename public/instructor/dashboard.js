document.addEventListener('DOMContentLoaded', async () => {
    const batchSelect = document.getElementById('batchId');
    const courseSelect = document.getElementById('courseId');
    const createClassForm = document.getElementById('createClassForm');
    const subtopicsContainer = document.getElementById('subtopicsContainer');
    const addSubtopicBtn = document.getElementById('addSubtopicBtn');
    const newSubtopicInput = document.getElementById('newSubtopic');
    const toast = document.getElementById('toast');

    let subtopics = [];

    // Mock instructor ID for now - should come from auth
    const instructorId = 4; 

    // Fetch Batches and Courses
    try {
        const [batchesRes, coursesRes] = await Promise.all([
            fetch('/class/api/batches'),
            fetch('/class/api/courses')
        ]);

        const batchesData = await batchesRes.json();
        const coursesData = await coursesRes.json();

        if (batchesData.success) {
            batchesData.data.forEach(batch => {
                const option = document.createElement('option');
                option.value = batch.batch_id;
                option.textContent = `${batch.name || batch.batch_id} (${batch.session})`;
                batchSelect.appendChild(option);
            });
        }

        if (coursesData.success) {
            coursesData.data.forEach(course => {
                const option = document.createElement('option');
                option.value = course.id;
                option.textContent = course.title;
                courseSelect.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        showToast('Failed to load batches or courses', 'error');
    }

    // Subtopics handling
    addSubtopicBtn.addEventListener('click', () => {
        const value = newSubtopicInput.value.trim();
        if (value && !subtopics.includes(value)) {
            subtopics.push(value);
            renderSubtopics();
            newSubtopicInput.value = '';
        }
    });

    function renderSubtopics() {
        subtopicsContainer.innerHTML = '';
        subtopics.forEach((topic, index) => {
            const tag = document.createElement('div');
            tag.className = 'subtopic-tag';
            
            const span = document.createElement('span');
            span.textContent = topic;
            tag.appendChild(span);

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.innerHTML = '&times;';
            removeBtn.addEventListener('click', () => removeSubtopic(index));
            tag.appendChild(removeBtn);

            subtopicsContainer.appendChild(tag);
        });
    }

    const removeSubtopic = (index) => {
        subtopics.splice(index, 1);
        renderSubtopics();
    };

    // Form submission
    createClassForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(createClassForm);
        const data = Object.fromEntries(formData.entries());
        
        data.instructorId = instructorId;
        data.subtopics = subtopics;
        data.weekNumber = parseInt(data.weekNumber);
        data.dayNumber = parseInt(data.dayNumber);

        try {
            const response = await fetch('/class/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (result.success) {
                showToast('Class created successfully!', 'success');
                createClassForm.reset();
                subtopics = [];
                renderSubtopics();
            } else {
                showToast(result.message || 'Error creating class', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showToast('Network error, please try again', 'error');
        }
    });

    function showToast(message, type) {
        toast.textContent = message;
        toast.className = `toast ${type} show`;
        setTimeout(() => {
            toast.className = 'toast';
        }, 3000);
    }
});
