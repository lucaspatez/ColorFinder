// Color Converter

var color, name, rgb, hex, hsl, hwb, cmyk, ncol;

document.querySelector('#color').onkeyup = () => {
  color = w3color(_this.value);

  if (color.valid) {
    name = color.toName();
    hex = color.toHexString();
    cmyk = color.toCmykString();
    ncol = color.toNcolString();

    if (name == '') name = '<em>Sem nome</em>';

    document.querySelector('#name').innerHTML = name;
    document.querySelector('#hex').innerHTML = hex;
    document.querySelector('#cmyk').innerHTML = cmyk;
    document.querySelector('#ncol').innerHTML = ncol;

    if (color.opacity == 1) {
      rgb = color.toRgbString();
      hsl = color.toHslString();
      hwb = color.toHwbString();

      document.querySelector('#rgbName').textContent = 'Rgb';
      document.querySelector('#hslName').textContent = 'Hsl';
      document.querySelector('#hwbName').textContent = 'Hwb';
    } else {
      rgb = color.toRgbaString();
      hsl = color.toHslaString();
      hwb = color.toHwbaString();

      document.querySelector('#rgbName').textContent = 'Rgba';
      document.querySelector('#hslName').textContent = 'Hsla';
      document.querySelector('#hwbName').textContent = 'Hwba';
    }

    document.querySelector('#rgb').innerHTML = rgb;
    document.querySelector('#hsl').innerHTML = hsl;
    document.querySelector('#hwb').innerHTML = hwb;

    document.querySelector('#currentColor').style.background = rgb;
    document.querySelector('#colorError').style.display = 'none';
    document.querySelectorAll('#resultTable, #currentColor').classList.remove('hidden');
    document.querySelectorAll('.colors, #currentColor').style.minHeight = '220px';
  } else {
    document.querySelector('#colorError').style.display = 'block';
    document.querySelectorAll('#resultTable, #currentColor').classList.add('hidden');
    document.querySelectorAll('.colors, #currentColor').style.minHeight = '0';
  }
};