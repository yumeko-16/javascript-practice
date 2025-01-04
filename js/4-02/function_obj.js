const getTriange = new Function('base', 'height', 'return base * height / 2;');
console.log('三角形の面積：' + getTriange(5, 2));
