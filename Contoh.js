console.log("Hello World")

let city  = "Tangerang"
let kodepos = 15125;

console.log(city + kodepos)

let umur = 20
let x = 1

let total = umur + x
console.log(total)

// Operator Perbandingan
console.log(10 === "10")
console.log(10 == "10")

// Fungsi IF
let nilai = 65

if(nilai>80){
    console.log("Grade = A")
}else if(nilai > 70){
    console.log("Grade = B")
}else{
    console.log("Grade = C")
}

// function tanpa nama
let name = 'Andrew'
let getName = function () {
    console.log(name)
    let age = 26
    if (2>0){
        console.log(name)
        console.log(age)
    }
    return  `Nama adalah : ${name}`// Templating
    // "Nama adalah : " + nama
}
console.log(getName())
// console.log(age) // Age dosomo tidak terdefinisi karena scope age hanya di dalam function

let toCelcius = function(f){
    let c = (f-32) * (5/9)
    return c
}

console.log(toCelcius(53))

let mybook = {
    title   : "Javascript",
    author  : "Aditiya",
    page    : 200,
    summary : function(x){
        console.log(mybook.title + x)
    }
}

mybook.summary(10)

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let pass = '123456'
console.log(pass.includes('123456'))

const Tanya = []
const emptyArray = [];
const number = [1.00, 2, -3]
const gadogado = [true, 12, 'Andrew']

const nums = [1]
nums.push(12) // Menaruh di depan array
nums.push(22)
nums.unshift(5)
nums.splice(1,1,300) // mulai dari index ke-1 lalu hapus 1 angka didepan index 1 (nilai itu sendiri), terus insert ke index-1
nums.pop() // Menghapus angka paling belakang
nums.shift() // Menghapus angka paling depan
nums[0] = 200
console.log(nums) // Menaruh di belakang array

const todos = ['Coding', 'Playing']

todos.forEach(function(todo, index){
    const num = index + 1
    console.log(`${num}.${todo}`)
})

const index = todos.indexOf('Playing') // Untuk melakukan search index ke-

// console.log(index);


// Array Baru

const notes = [
    {title: "Hello", body: 'World'},
    {title: "Apa", body: 'Kabar'},
    {title: "Flying", body: 'Witch'},
]

const cari = notes.findIndex(function(note){ // Untuk melakukan search index 
    return note.title == "Flying";
})

console.log(cari); // yang direturn adalah indexnya

const cari2 = function(notes, notesTitle){ // Untuk mencari search Titlenya
    return notes.find(function(note){ // Dipisahkan dikarenakan array yg dituju memiliki beberapa array
            return note.title === notesTitle
        }
    )
}

console.log(cari2(notes, 'Apa')) 

const cari3 = function(notes){ // Untuk mengfilter misalnya untuk prodi TI Saja
    return notes.filter(function(note){
        return note.title === "Apa"
    })
}

console.log(cari3(notes))


const todoss = [
    {text: 'menulis' , complete: true},
    {text: 'tidur' , complete: false},
    {text: 'makan' , complete: true},
]

const sortTodo = function(todoss){
    todoss.sort(
        function(a,b){
            console.log(a)
            console.log(b)
            if(!a.complete && b.complete){
                return -1 // Lebih Kecil
            }else if(!b.complete && a.complete){
                return 1 // Lebih besar
            }else{
                return 0
            }
        }
    )
}
sortTodo(todoss)
console.log(todoss)