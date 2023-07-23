const fileUpload = (id, labelId, defaultText) => {
    const node = document.getElementById(id);
    const label = document.getElementById(labelId);

    label.innerText = node.value === '' ? defaultText : node.value.split('\\').slice(-1);
}