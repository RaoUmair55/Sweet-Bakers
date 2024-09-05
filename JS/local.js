// Select all buttons with the class 'btn'
const buttons = document.querySelectorAll('.Cart-btn');

// Loop through each button and add the event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Added sucessfully!');
    });
});



function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
