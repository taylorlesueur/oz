let app = new Vue({
    el: '#app',
    data: {
      number: '',
      current: {
        title: '',
        img: '',
        alt: ''
      },
    },
    created() {
      this.xkcd();
    },
    methods: {
      xkcd() {
        let url = 'https://xkcd.now.sh/?comic=';
        if (this.number === '') {
          url += 'latest';
        } else {
          url += this.number;
        }
        axios.get(url)
          .then(response => {
            this.current = response.data;
            return true;
          })
          .catch(error => {
            console.log(error)
          });
      }
    }
  });