import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Ruž za usne',
      price: '12.00 KM',
      description: 'Brzo i jednostavno dobijate prirodan izgled naglašenih usana',
      image: 'assets/images/ruz.jpg'
    },
    {
      name: 'Maskara',
      price: '15.50 KM',
      description: 'Osigurava maksimalnu dužinu i volumen trepavica ',
      image: 'assets/images/maskara.jpg'
    },
    {
      name: 'Puder u prahu',
      price: '18.00 KM',
      description: 'Savršeno ujednačava ten, stvara mat efekat.',
      image: 'assets/images/puder.jpg'
    },
    {
      name: 'Tečni puder',
      price: '50.00 KM',
      description: 'Visoka moć prekrivanja koja traje cijeli dan.',
      image: 'assets/images/tecni_puder.jpg'
    },
    {
      name: 'Rumenilo',
      price: '20.00 KM',
      description: 'Pruža prekrasan ružičasti efekat na vašim obrazima.',
      image: 'assets/images/rumenilo.jpg'
    },
    {
      name: 'Bronzer',
      price: '30.00 KM',
      description: 'Pruža prirodnu preplanulost vašem licu.',
      image: 'assets/images/bronzer.jpg'
    },
    {
      name: 'BB krema',
      price: '15.00 KM',
      description: 'Pogodna za sve tipove kože.',
      image: 'assets/images/bb krema.jpg'
    },
    {
      name: 'Highlighter',
      price: '23.00 KM',
      description: 'Pruža blistavost i svježinu licu.',
      image: 'assets/images/highlighter.jpg'
    },
    {
      name: 'Sjene za oči',
      price: '28.00 KM',
      description: 'Savršen izbor za kreiranje make up-a za svaku priliku.',
      image: 'assets/images/sjene.jpg'
    },
  {
        name: 'Fiksator za lice ',
        price: '15.00 KM',
        description: 'Garantuje postojanost šminke.',
        image: 'assets/images/fiksator.jpg'
      },

    {
          name: 'Gel za obrve ',
          description: 'Lako fiksiranje i oblikovanje po želji.',
          price: '10.00 KM',
          image: 'assets/images/gel.jpg'
        },

      {
            name: 'Tuš za oči ',
            price: '17.00 KM',
            description: 'Dočarava make up očiju u jednom trenu.',
            image: 'assets/images/tus.jpg'
          },

        {
              name: 'Sjaj za usne ',
              price: '10.00 KM',
              description: 'Samo u jednom potezu hidrira i daje efekat punih usana.',
              image: 'assets/images/sjaj.jpg'
            },

          {
                name: 'Olovka za usne ',
                price: '20.00 KM',

                description: 'Savršeno oblikuje vaše usne.',
                image: 'assets/images/usne3.jpg'
              },

            {
                  name: 'Olovka za oči',
                  price: '23.00 KM',
                  description: 'Osigurava lako i precizno nanošenje.',
                  image: 'assets/images/olovka.jpg'
                },


                {
                                    name: 'Paleta za konturisanje lica  ',
                                    price: '23.00 KM',
                                    description: 'Daje savršene konture i dočarava crte lica.',
                                    image: 'assets/images/konture.jpg'
                                  },


                {
                                    name: 'Primer za oči ',
                                    price: '23.00 KM',
                                    description: 'Posebno formulisan za osjetljivu kožu ispod očiju.',
                                    image: 'assets/images/oci.jpg'
                                  },
                                {
                                  name: 'Boja za obrve ',
                                  price: '13.00 KM',
                                  description: 'Pruža izgled prirodno gustih obrva.',
                                  image: 'assets/images/boja.jpg'
                                 },



                                                {
                                                                    name: 'Korektor u stiku  ',
                                                                    price: '33.00 KM',
                                                                    description: 'Učinkovito prekriva sitne nesavršenosti na licu.',
                                                                    image: 'assets/images/Korektors.jpg'
                                                                  },

      {
                                                                                          name: 'Kompaktni puder  ',
                                                                                          price: '25.00 KM',
                                                                                          description: 'Pogodan je za normalnu i masnu kožu.',
                                                                                          image: 'assets/images/kpuder.jpg'
                                                                                        },


  ];

}
