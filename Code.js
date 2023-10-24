console.log("Made with ❤️ by alex_070!")

document.addEventListener('DOMContentLoaded', function() {
    var toggleIcons = document.querySelectorAll('.toggle-icon');
    for (var i = 0; i < toggleIcons.length; i++) {
      toggleIcons[i].addEventListener('click', function() {
        var project = this.parentNode;
        var picture = project.querySelector('.picture');
        var isOpen = project.classList.contains('open');

        if (isOpen) {
          project.classList.remove('open');
          picture.style.display = 'none';
          this.innerHTML = '>';
        } else {
          project.classList.add('open');
          picture.style.display = 'block';
          this.innerHTML = '<';
        }
      });
    }
  });

function Discord() {
    window.location.href = "https://discord.gg/nnPXQWQYh6";
}

function Roblox() {
    window.location.href = "https://www.roblox.com/users/3860928027";
}

function CorrectPage() {
  window.location.href = "Main.html";
}