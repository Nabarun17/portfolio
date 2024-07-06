function showParagraph(paragraphId) {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.classList.add('hidden');
    });
    const selectedParagraph = document.getElementById(paragraphId);
    selectedParagraph.classList.remove('hidden');
}
