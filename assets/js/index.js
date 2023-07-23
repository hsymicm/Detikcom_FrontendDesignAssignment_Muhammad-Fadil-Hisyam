const scrollToTarget = (element) => {
    var element = document.getElementById(element);
    var nav = document.querySelector('.nav-menu');
    var headerOffset = nav.getBoundingClientRect().bottom + 20;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const navigate = (url) => {
    window.location.href = url;
}