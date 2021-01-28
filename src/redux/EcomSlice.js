import { createSlice } from '@reduxjs/toolkit';

export const EcomSlice = createSlice({
  name: 'Ecom',
  initialState: {
    cart:[],
    products:{
      topSeller:{
        title:'Top Seller',
        items:[
          {
            id:'top-seller-1',
            description:'Beckham Hotel Collection Gel Pillow (2-Pack) - Luxury Plush Gel Pillow - Dust Mite Resistant & Hypoallergenic - Queen',
            details:'Brand:Beckham Luxury Linens',
            rating:5,
            price: 1999.00,
            images:[
                'https://images-na.ssl-images-amazon.com/images/I/71oo6xUnQrL._AC_SX679_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/91tPH8KEE%2BL._AC_SX569_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/91oVmDMxn-L._AC_SX522_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/811sJqeyORL._AC_SX522_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/81BQ9phDjuL._AC_SX522_.jpg'
            ]
          },
          {
            id:'top-seller-2',
            description:'Naipo Shiatsu Back and Neck Massager with Heat Deep Kneading Massage for Neck, Back, Shoulder, Foot and Legs, Use at Home, Car, Office',
            details:'Brand:	Naipo',
            rating:5,
            price: 2949.00,
            images:[
                'https://images-na.ssl-images-amazon.com/images/I/71Rq86W%2BjJL._AC_SX679_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/71vB8-dW%2BsL._AC_SX679_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/713f0DCKdwL._AC_SX679_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/71JCoKl1GLL._AC_SX522_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/71PE6pQ6zgL._AC_SX679_.jpg'
            ]
          },
        ]
      },
      mostPopular:{
        title:'Most Popular',
        items:[
            {
              id:'most-popular-1',
              description:'Apple AirPods 2nd Generation Early 2019 - Standard Charging case',
              details:'Brand:AppleMore Headphones & Headsets from Apple',
              rating:4,
              price: 9290.00,
              images:[
                  'http://ph-test-11.slatic.net/p/6bf8eb1dc7cfe9e1fbdf26362cd2db10.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/0e41323d5f2104e0e2f4824553650c19.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/0a76b91977148457e0896b57df9c0772.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/34d51184749c7d67175c26c55429f89f.png_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/dc5710ed7d92c101eed33f6ca7e2b29b.png_720x720q80.jpg_.webp'
              ]
            },
            {
              id:'most-popular-2',
              description:'Apple iPad Pro 11" 1st Generation Late 2018 - Wifi 64GB',
              details:'Brand:AppleMore Tablets from Apple',
              rating:5,
              price: 46990.00,
              images:[
                  '//ph-test-11.slatic.net/p/6af40aa7c6a222f677d2a345b24e958f.png_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/d6ae8ea3145dc89e76d972bf3d7d4ff4.png_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/2996981e189287d893a2c1ea15939e6e.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/2a60eee5ae4fc8917632f97d0f08017f.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/6af40aa7c6a222f677d2a345b24e958f.png_720x720q80.jpg_.webp',
              ]
            },
            {
              id:'most-popular-3',
              description:'LIGE Watch Men Fashion Sports Quartz Clock Mens Watch',
              details:'Brand:LIGEMore Men Watches from LIGE',
              rating:4,
              price: 969.22,
              images:[
                '//ph-test-11.slatic.net/p/8/lige-watch-men-fashion-sports-quartz-clock-mens-watches-top-brand-luxury-full-steel-casual-waterproof-business-watch-lg9821-intl-4765-625618501-1376d92a6cc2b8ea554bc3301611fa15-catalog.jpg_720x720q80.jpg_.webp',
                '//ph-test-11.slatic.net/p/8/lige-watch-men-fashion-sports-quartz-clock-mens-watches-top-brand-luxury-full-steel-casual-waterproof-business-watch-lg9821-intl-4765-625618501-090f77f5ca1a2547b85d88ea00e7181e-catalog.jpg_720x720q80.jpg_.webp',
                '//ph-test-11.slatic.net/p/8/lige-watch-men-fashion-sports-quartz-clock-mens-watches-top-brand-luxury-full-steel-casual-waterproof-business-watch-lg9821-intl-4765-625618501-db9ab5dfb1189d995b18a00b658ab21c-catalog.jpg_720x720q80.jpg_.webp',
                '//ph-test-11.slatic.net/p/8/lige-watch-men-fashion-sports-quartz-clock-mens-watches-top-brand-luxury-full-steel-casual-waterproof-business-watch-lg9821-intl-4765-625618501-b6cf23a52a2e164122ffad394e627c2e-catalog.jpg_720x720q80.jpg_.webp',
                '//ph-test-11.slatic.net/p/8/lige-watch-men-fashion-sports-quartz-clock-mens-watches-top-brand-luxury-full-steel-casual-waterproof-business-watch-lg9821-intl-4765-625618501-56629e27548684e5ed64c15c6c11d2ba-catalog.jpg_720x720q80.jpg_.webp',
              ]
            },
            {
              id:'most-popular-4',
              description:'Gopro Hero 9 Action Camera Black Edition',
              details:'Brand:GoPro',
              rating:5,
              price: 26490.00,
              images:[
                  '//ph-test-11.slatic.net/p/9faeb46ac673a11d9f73a25ab7f83b24.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/1d5b38defe2459f84d1763f771d807fb.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/e2f87048f93ac48b103cb52a365af7d8.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/26d83502ad9a9540c3a5a2465747c3f3.jpg_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/9404ddefc573287a76d2bc3a00095903.jpg_720x720q80.jpg_.webp',
              ]
            },
            {
              id:'most-popular-5',
              description:'Apple MacBook Pro with Touch Bar 13" Mid 2020 2.0GHz Quad-Core Processor with 512GB Storage',
              details:'Brand:AppleMore Laptops from Apple',
              rating: 5,
              price: 94990.00,
              images:[
                  '//ph-test-11.slatic.net/p/0d0719c78ed0b04a35f76b2c54735b49.png_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/da31b231a9f0ecafd14ce847ac810a54.png_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/8018cc577232f6eaef97a4af5e166614.png_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/306387af0c8462fc4d812a907c86c40e.png_720x720q80.jpg_.webp',
                  '//ph-test-11.slatic.net/p/d684486aa9e8198829b905aabc1909e0.png_720x720q80.jpg_.webp',
              ]
            },
        ]
      },
      beautyProducts:{
        title:'Beauty & Personal Care products',
        items:[
            {
              id:'beauty-product-1',
              description:'Step Hair Dryer And Volumizer Hot Air Brush',
              details:'Brand:REVLON One',
              rating: 5,
              price: 2050.00,
              images:[
                  'https://images-na.ssl-images-amazon.com/images/I/71aXzv34N%2BL._SX425_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/81qE4AMwzxL._SY355_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/71gIRKsFceL._SY355_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/81FGuBYd2FL._SY355_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/71dZK11HN4L._SY355_.jpg'
              ]
            },
            {
              id:'beauty-product-2',
              description:'Schick Hydro Silk Touch-Up Multipurpose Exfoliating Dermaplaning Tool',
              details:'Brand:Shick',
              rating:5,
              price: 249.50,
              images:[
                  'https://images-na.ssl-images-amazon.com/images/I/71P4hgTnJcL._SY355_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/71OqW%2B0QHEL._SY355_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/71V4zGWNhGL._SY355_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/71xW3my11oL._SY355_.jpg',
                  'https://images-na.ssl-images-amazon.com/images/I/819Zt6VqJYL._SY355_.jpg',
              ]
            },
            {
              id:'beauty-product-3',
              description:'Philips Norelco OneBlade Hybrid Electric Trimmer and Shaver',
              details:'Brand:Philips Norelco',
              rating:5,
              price: 1700.00,
              images:[
                'https://images-na.ssl-images-amazon.com/images/I/91Gr10G%2BuKL._SX425_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/91YaRyhH1fL._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/91OoeqPvFbL._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/91NvestMBgL._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/81ZglXnYAOL._SX355_.jpg',
              ]
            },
            {
              id:'beauty-product-4',
              description:'CeraVe Hydrating Facial Cleanser',
              details:'Brand:CeraVe',
              rating:4,
              price: 732.00,
              images:[
                'https://images-na.ssl-images-amazon.com/images/I/51DbQev1thL._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/61iVuLcmlnL._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/61y0ep2b1bL._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/71sOVZzsvPL._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/517-kuApPTL._SY355_.jpg'
              ]
            },
            {
              id:'beauty-product-5',
              description:'DenTek Triple Clean Floss Picks',
              details:'Brand:Dentek',
              rating: 4,
              price: 180.00,
              images:[
                'https://images-na.ssl-images-amazon.com/images/I/41hyd64Wx6L._SY355_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/71sX4chGqZL._SX466_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/611AheougOL._SX466_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/51LquFcJtGL._SX466_.jpg',
                'https://images-na.ssl-images-amazon.com/images/I/61j%2BYHEO64L._SX425_.jpg'
             ]
            },
        ]
      }
    },

  },
  reducers: {
    setActiveRoute: (state,action) => {
      state.activeRoute= action.payload
    },
    addToCart: (state,action) => {
      if(state.cart.length <= 0){
        state.cart.push(action.payload)
        return
      }else{
        let indexToAdd = state.cart.findIndex(
          (item)=>item.id === action.payload.id
        )
        
        if(indexToAdd >= 0){
          state.cart.map((item)=>{
            if(item.id === action.payload.id){
              return item.quantity += action.payload.quantity
            }
            return item.quantity
          })
          return
        }else{
          state.cart.push(action.payload)
        }
  
      }  
    },
    deleteToCart:(state,action) =>{
      let indextoDelete = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )
      let deletedState = [...state.cart]
      if(indextoDelete >= 0){
        deletedState.splice(indextoDelete, 1)
      }else{return}

      return {
        ...state,
        cart: deletedState
      }
    },
    quantityChange:(state,action) =>{
      let math = action.payload.math

      if(math === 'add'){
        state.cart.map((item)=>{
          if(item.id === action.payload.props.id){
            return item.quantity += 1
          }
          return item.quantity
        })
      }else if(math === 'minus'){
        state.cart.map((item)=>{
          if(item.id === action.payload.props.id){
            return item.quantity -= 1
          }
          return item.quantity
        })
      }else if(math === 'onChange'){
        state.cart.map((item)=>{
          if(item.id === action.payload.props.id){
            return item.quantity = parseFloat(action.payload.value)
          }
          return item.quantity
        })
      }
    },


  },
  
});

export const { setActiveRoute, addToCart, deleteToCart,
  quantityChange} = EcomSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectEcom = state => state.Ecom;

export default EcomSlice.reducer;
