# rc-spanishIdValidator [Work in progress] 

This is an AngularJS library which provides validation directives for common Spanish official ID numbers like DNI or NIF.

###Usage and examples

Each input you want to validate must contain the ng-model and the custom directive rc-dni. An example of application can be found below:

```
<input type="text" 
          rc-dni=""
          ng-model="model.dni" 
          />
```


If a non-valid number of document is provided in this input element, AngularJS will identify it as a validation error.

![ok](https://dl.dropboxusercontent.com/u/759388/ok.png)
![wrong](https://dl.dropboxusercontent.com/u/759388/wrong.png)


For more information, see **Getting started** section and code examples in tutorials page.

###Dependencies
* AngularJS

###Contributors
* [Braulio Diez](https://github.com/brauliodiez)
* [Ana Belén Gallardo](https://github.com/anenchu) 
* [Ángela Prades](https://github.com/AngelaPrades) 
* [Evaristo Gutiérrez](https://github.com/varyvol)
* [Jesús Alcaraz](https://github.com/jesus751990)
* [Alejandro Rosa](https://github.com/arp82)
* [José Antonio Ruiz](https://github.com/JoseAntonioRuiz)
* [Antonio Navas](https://github.com/antonionavas)
* [Miguel Chamizo](https://github.com/MiguelChamizo)
* [Virginia Cruz](https://github.com/virgy87)
* [Jesús Lojo](https://github.com/jesusweb)
* [Daniel Jimenez](https://github.com/enterdanix)
* [Carlos Alberto Sánchez](https://github.com/casaki)
* [Javier Marin](https://github.com/javiermarin)
* [Anxo Fole](https://github.com/anxofole)

###License

The MIT License (MIT)
