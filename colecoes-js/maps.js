function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (valeu === 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Staphany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));