let app = Vue.createApp({
    el: '#app',
    data(){
        return{
            title: 'List of Countries',
            title2: 'Country Data',
            countries: [],
            country: {},
            show_country: false,
        }
    },
    methods: {
        fetchData(){
            let url = 'https://restcountries.com/v3.1/all';
            axios.get(url).then(res => {
                this.countries = res.data;
            });
        },
        showCountry(code){
            let allCountries = this.countries;
            let country = allCountries.filter(country => country.cca2 === code);
            this.country = country;
            this.show_country = 'true';
        },
        showCountries(){
            this.show_country = false;
        }
    },
    mounted(){
        this.fetchData();
    }
})

app.mount('#app');