Vue.component('star-rating', VueStarRating.default);
let app = new Vue({
    el: '#app',
    data: {
      number: '',
      max: '',
      currentOz: {
        q: '',
        a: ''
      },
      currentZen: {
        q: '',
        a: ''
      },
      loading: true,
      addedName: '',
      addedComment: '',
      comments: {},
      ratings: {},
    },
    created() {
      this.getOz();
      this.getZen();
    },
    methods: {
      getOz() {
        const ozArray = [          
          {
            "q":"There is no place like home.",
            "a":"Dorothy",
          },
          {
            "q":"Some people without brains do an awful lot of talking, don't you think?",
            "a":"Scarecrow",
          },
          {
            "q":"You have plenty of courage, I am sure. All you need is confidence in yourself. There is no living thing that is not afraid when it faces danger. The true courage is in facing danger when you are afraid, and that kind of courage you have in plenty.",
            "a":"Oz",
          },
          {
            "q":"I shall take the heart. For brains do not make one happy, and happiness is the best thing in the world.",
            "a":"Tinman",
          },
          {
            "q":"If we walk far enough, we shall sometime come to someplace.",
            "a":"Dorothy",
          },
          {
            "q":"A baby has brains, but it doesn't know much. Experience is the only thing that brings knowledge, and the longer you are on earth the more experience you are sure to get.",
            "a":"Scarecrow",
          },
          {
            "q":"True courage is in facing danger when you are afraid...",
            "a":"Oz",
          },
          {
            "q":"No matter how dreary and gray our homes are, we people of flesh and blood would rather live there than in any other country, be it ever so beautiful. There is no place like home.",
            "a":"Dorothy",
          },
          {
            "q":"Once I had brains, and a heart also; so, having tried them both, I should much rather have a heart.”",
            "a":"Tinman",
          },
          {
            "q":"Toto did not really care whether he was in Kansas or the Land of Oz so long as Dorothy was with him; but he knew the little girl was unhappy, and that made him unhappy too.",
            "a":"L. Frank Baum",
          },
          {
            "q":"It is such an uncomfortable feeling to know one is a fool.",
            "a":"Scarecrow",
          },
          {
            "q":"For I consider brains far superior to money in every way. You may have noticed that if one has money without brains, he cannot use it to his advantage; but if one has brains without money, they will enable him to live comfortably to the end of his days.",
            "a":"Scarecrow",
          },
          {
            "q":"If your heads were stuffed with straw, like mine, you would probably all live in the beautiful places, and then Kansas would have no people at all. It is fortunate for Kansas that you have brains.",
            "a":"Scarecrow",
          },
          {
            "q":"I am content in knowing I am as brave as any beast that ever lived, if not braver.",
            "a":"Lion",
          },
          {
            "q":"Dorothy said nothing. Oz had not kept the promise he made her, but he had done his best. So she forgave him. As he said, he was a good man, even if he was a bad Wizard.",
            "a":"L. Frank Baum",
          },
          {
            "q":"If you only have brains on your head you would be as good a man as any of them, and a better man than some of them. Brains are the only things worth having in this world, no matter whether one is a crow or a man.",
            "a":"Crow",
          },
          {
            "q":"The Tin Woodman knew very well he had no heart, and therefore he took great care never to be cruel or unkind to anything. ",
            "a":"L. Frank Baum",
          },
          {
            "q":"While I was in love I was the happiest man on earth.",
            "a":"Tinman",
          },
          {
            "q":"Back where I come from, we have universities, seats of great learning, where men go to become great thinkers. And when they come out, they think deep thoughts and with no more brains than you have. But they have one thing you haven't got: a diploma.",
            "a":"Oz",
          },
          {
            "q":"It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings. Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose. Toto played all day long, and Dorothy played with him, and loved him dearly.",
            "a":"L. Frank Baum",
          },
          {
            "q":"He is a good Wizard. Whether he is a man or not I cannot tell, for I have never seen him.",
            "a":"Witch of the North",
          },
          {
            "q":"But Dorothy, knowing her to be a witch, had expected her to disappear in just that way, and was not surprised in the least.",
            "a":"L. Frank Baum",
          },
          {
            "q":"Toward evening they came to a great forest, where the trees grew so big and close together that their branches met over the road of yellow brick. It was almost dark under the trees, for the branches shut out the daylight; but the travelers did not stop, and went on into the forest.",
            "a":"L. Frank Baum",
          },
          {
            "q":"It must be inconvenient to be made of flesh, for you must sleep, and eat and drink. However, you have brains, and it is worth a lot of bother to be able to think properly.",
            "a":"Scarecrow",
          },
          {
            "q":"All the other animals in the forest naturally expect me to be brave, for the Lion is everywhere thought to be the King of Beasts. I learned that if I roared very loudly every living thing was frightened and got out of my way.",
            "a":"Lion",
          },
      ]
        this.currentOz = ozArray[Math.floor(Math.random()*ozArray.length)];
      },
      
      getZen() {
        const zenArray = [          
          {
            "q":"The best way to predict the future is to create it.",
            "a":"Peter Drucker",
          },
          {
            "q":"Winners never quit and quitters never win.",
            "a":"Vince Lombardi",
          },
          {
            "q":"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.",
            "a":"Steve Jobs",
          },
          {
            "q":"My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had -- everyday I’m learning something new.",
            "a":"Richard Branson",
          },
          {
            "q":"Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.",
            "a":"Oprah Winfrey",
          },
          {
            "q":"It’s fine to celebrate success but it is more important to heed the lessons of failure.",
            "a":"Bill Gates",
          },
          {
            "q":"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently.",
            "a":"Warren Buffett",
          },
          {
            "q":"One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you.",
            "a":"Jeff Bezos",
          },
          {
            "q":"I have not failed. I’ve just found 10,000 ways that won’t work.",
            "a":"Thomas Edison",
          },
          {
            "q":"Logic will get you from A to B. Imagination will take you everywhere.",
            "a":"Albert Einstein",
          },
          {
            "q":"Success is walking from failure to failure with no loss of enthusiasm.",
            "a":"Winston Churchill",
          },
          {
            "q":"Genius is 1% inspiration, and 99% perspiration.",
            "a":"Thomas Edison",
          },
          {
            "q":"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
            "a":"Mark Twain",
          },
          {
            "q":"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.",
            "a":"Vince Lombardi",
          },
          {
            "q":"If you cannot do great things, do small things in a great way.",
            "a":"Napoleon Hill",
          },
          {
            "q":"I don’t know the key to success, but the key to failure is trying to please everybody.",
            "a":"Bill Cosby",
          },
          {
            "q":"Success is not what you have, but who you are.",
            "a":"Bo Bennet",
          },
          {
            "q":"Entrepreneurship is living a few years of your life like most people won't so you can spend the rest of your life like most people cant.",
            "a":"Warren G. Tracy’s student",
          },
          {
            "q":"To win without risk is to triumph without glory.",
            "a":"Corneille",
          },
          {
            "q":"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
            "a":"Mark Twain",
          },
          {
            "q":"There is only one success- to be able to spend your life in your own way.",
            "a":"Napoleon Hill",
          },
          {
            "q":"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
            "a":"Albert Schweitzer",
          },
          {
            "q":"What is not started will never get finished.",
            "a":"Johann Wolfgang von Goethe",
          },
          {
            "q":"When you cease to dream you cease to live.",
            "a":"Malcolm Forbes",
          },
          {
            "q":"Formal education will make you a living; self-education will make you a fortune.",
            "a":"Jim Rohn",
          },
          {
            "q":"The most valuable thing you can make is a mistake- you can’t learn anything from being perfect.",
            "a":"Adam Osborne",
          }
      ]
        this.currentZen = zenArray[Math.floor(Math.random()*zenArray.length)];
        this.loading = false;
      },
      newOz() {
        this.getOz();
        console.log("OZ!!");
      },
      newBusiness() {
        this.getZen();
        console.log("ZEN!!");
      },
      newBoth() {
        this.getOz();
        this.getZen();
        console.log("BOTH!!");
      },

      addComment() {
        if (!(this.number in this.comments))
          Vue.set(app.comments, this.number, new Array);
          var today = new Date();
          var date = (today.getMonth()+1)+'/'+ today.getDate() +'/'+today.getFullYear() + " @" + today.getHours() + ':' + today.getMinutes();
        this.comments[this.number].push({
          author: this.addedName,
          text: this.addedComment,
          time: date
        });
        this.addedName = '';
        this.addedComment = '';
      }
    }
  })
