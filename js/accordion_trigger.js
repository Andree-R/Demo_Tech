const accordionTriggers = document.querySelectorAll('.accordion-trigger');
const accordionContents = document.querySelectorAll('.accordion-content');

accordionTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    const content = accordionContents[index];

    accordionTriggers.forEach((item, i) => {
      if (i !== index) {
        item.classList.remove('active');
        accordionContents[i].classList.remove('active');
      }
    });


    trigger.classList.toggle('active');
    content.classList.toggle('active');
  });
});
