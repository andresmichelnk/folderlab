class File {
  constructor(name) {
    this.name = name;
  }
}

class Folder {
  constructor(namefolder, folders, files) {
    this.namefolder = namefolder || 'newFoder'
    this.folders = folders || [];
    this.files = files || [];
  }
}

var mook = new Folder(
  'Mis Documentos',
  [
    new Folder(
      'Juegos',
       [
        new Folder('WoW',[new Folder('images',[],[new File("img1.jpg"),new File("img2.png")]),new Folder('sounds',[],[new File("message.wav"),new File("iatention.wav")])],[new File("Laucher.exe"),new File("datos.bd"),new File("WoW.exe"),new File("desktop.ini"),new File("ISerializable.dll")]),
        new Folder('Call of Duty 8',[new Folder('images',[],[new File("img.jpg"),new File("img.png")]),new Folder('sounds',[],[new File("messagee.wav"),new File("iateention.wav")])],[new File("Laucher.exe"),new File("datos.bd"),new File("Call of Duty.exe"),new File("desktop.ini"),new File("ISerializable.dll")]),
        new Folder('Residen Evil',[ ],[new File("Laucher.exe"),new File("datos.bd"),new File("Residen Evil.exe"),new File("desktop.ini")]),
        new Folder('Fifa 2021',[new Folder('images',[],[new File("img3.jpg"),new File("img4.png")]),new Folder('sounds',[],[new File("meessage.wav"),new File("iatentioon.wav")])],[new File("Laucher.exe"),new File("datos.bd"),new File("Fifa 2021.exe"),new File("desktop.ini"),new File("ISerializable.dll")]),
        new Folder('Mortal Combat',[ ],[new File("Laucher.exe"),new File("datos.bd"),new File("Mortal Combat.exe"),new File("ISerializable.dll")]),
        new Folder('The Witcher',[ ],[new File("Laucher.exe"),new File("datos.bd"),new File("The Witcher.exe"),new File("desktop.ini"),new File("ISerializable.dll")]),
       ]
    )
  ],
  [
    new File("Tesis.doc"),
    new File("Poemas.pdf"),
    new File("Lo intento.txt")
  ]
)

export {Folder, File,mook}
