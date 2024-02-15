<template>
  <div>
    <p style="font-size: 25px; margin-left: 50px; justify-content: space-between; margin-top: 50px;">
      <b>Popular Items</b>
      <span style="margin-left: 1100px; font-family: inter; font-size: 16px; color: #009499;">See All</span>
    </p>
  </div>
  <div class="horizontal-list">
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Thumbnail Image.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="vintage-chicago-cubs-white-crewneck">
          Vintage chicago cubs white crewneck
        </div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart" width="16" height="16" viewBox="0 0 512 512 " fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar2.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="red-crewneck">Red Crewneck</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart2" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.66693 14C8.47005 14 8.2763 13.9406 8.10443 13.825C6.92943 13.0281 5.22318 11.7937 3.99818 10.3C2.74818 8.77813 2.14818 7.2125 2.16693 5.51875C2.18568 3.57813 3.74506 2 5.63881 2C7.14193 2 8.1388 2.92188 8.66693 3.59375C9.19505 2.92188 10.1919 2 11.6951 2C13.5888 2 15.1451 3.57813 15.1669 5.51875C15.1826 7.2125 14.5857 8.77813 13.3357 10.3C12.1107 11.7937 10.4044 13.0281 9.22943 13.825C9.05755 13.9437 8.8638 14 8.66693 14ZM5.63881 3C4.29193 3 3.18255 4.13438 3.16693 5.53125C3.13255 8.8 5.92943 11.1438 8.66693 13C11.4044 11.1406 14.2013 8.8 14.1669 5.53125C14.1513 4.1375 13.0451 3 11.6951 3C10.0076 3 9.12005 4.70625 9.1138 4.725C9.02943 4.89375 8.85755 5 8.66693 5C8.4763 5 8.30443 4.89375 8.22005 4.72188C8.21068 4.70625 7.32318 3 5.63881 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar3.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="necklace">Necklace</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.99994 14C7.80306 14 7.60931 13.9406 7.43744 13.825C6.26244 13.0281 4.55619 11.7937 3.33119 10.3C2.08119 8.77813 1.48119 7.2125 1.49994 5.51875C1.51869 3.57813 3.07806 2 4.97181 2C6.47494 2 7.47181 2.92188 7.99994 3.59375C8.52806 2.92188 9.52494 2 11.0281 2C12.9218 2 14.4781 3.57813 14.4999 5.51875C14.5156 7.2125 13.9187 8.77813 12.6687 10.3C11.4437 11.7937 9.73744 13.0281 8.56244 13.825C8.39056 13.9437 8.19681 14 7.99994 14ZM4.97181 3C3.62494 3 2.51556 4.13438 2.49994 5.53125C2.46556 8.8 5.26244 11.1438 7.99994 13C10.7374 11.1406 13.5343 8.8 13.4999 5.53125C13.4843 4.1375 12.3781 3 11.0281 3C9.34056 3 8.45306 4.70625 8.44681 4.725C8.36244 4.89375 8.19056 5 7.99994 5C7.80931 5 7.63744 4.89375 7.55306 4.72188C7.54369 4.70625 6.65619 3 4.97181 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar4.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="necklace">Necklace</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart4" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33343 14C8.13656 14 7.94281 13.9406 7.77093 13.825C6.59593 13.0281 4.88968 11.7937 3.66468 10.3C2.41468 8.77813 1.81468 7.2125 1.83343 5.51875C1.85218 3.57813 3.41156 2 5.30531 2C6.80843 2 7.80531 2.92188 8.33343 3.59375C8.86156 2.92188 9.85843 2 11.3616 2C13.2553 2 14.8116 3.57813 14.8334 5.51875C14.8491 7.2125 14.2522 8.77813 13.0022 10.3C11.7772 11.7937 10.0709 13.0281 8.89593 13.825C8.72406 13.9437 8.53031 14 8.33343 14ZM5.30531 3C3.95843 3 2.84906 4.13438 2.83343 5.53125C2.79906 8.8 5.59593 11.1438 8.33343 13C11.0709 11.1406 13.8678 8.8 13.8334 5.53125C13.8178 4.1375 12.7116 3 11.3616 3C9.67406 3 8.78656 4.70625 8.78031 4.725C8.69593 4.89375 8.52406 5 8.33343 5C8.14281 5 7.97093 4.89375 7.88656 4.72188C7.87718 4.70625 6.98968 3 5.30531 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar5.png"/>
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="necklace">Necklace</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart5" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.66644 14C8.46957 14 8.27582 13.9406 8.10394 13.825C6.92894 13.0281 5.22269 11.7937 3.99769 10.3C2.74769 8.77813 2.14769 7.2125 2.16644 5.51875C2.18519 3.57813 3.74457 2 5.63832 2C7.14144 2 8.13832 2.92188 8.66644 3.59375C9.19457 2.92188 10.1914 2 11.6946 2C13.5883 2 15.1446 3.57813 15.1664 5.51875C15.1821 7.2125 14.5852 8.77813 13.3352 10.3C12.1102 11.7937 10.4039 13.0281 9.22894 13.825C9.05707 13.9437 8.86332 14 8.66644 14ZM5.63832 3C4.29144 3 3.18207 4.13438 3.16644 5.53125C3.13207 8.8 5.92894 11.1438 8.66644 13C11.4039 11.1406 14.2008 8.8 14.1664 5.53125C14.1508 4.1375 13.0446 3 11.6946 3C10.0071 3 9.11957 4.70625 9.11332 4.725C9.02894 4.89375 8.85707 5 8.66644 5C8.47582 5 8.30394 4.89375 8.21957 4.72188C8.21019 4.70625 7.32269 3 5.63832 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item2">
      <div class="see-all-product">
        <p v-for="newproduct in allProductFirst">
          <router-link :to="'/all/' + newproduct.params">
            <span class="text-here"><span style="text-decoration: none; color: #009499;">{{
              newproduct.name }}</span></span>
          </router-link>
        </p>
      </div>
    </div>
  </div>
  <br>
  <p style="font-size: 25px; margin-right: 1060px; justify-content: space-between; margin-top: 50px;"><b>Shope By Brand</b>
  </p>
  <div class="atur-brand">
    <div class="filter-brand">
      <div class="wrapper">
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in product">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkNew">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkMango">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkReebok">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkConverse">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkSandro">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkNike">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkAdidas">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkDior">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkPuma">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkZara">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkBershka">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
        <div class="filter-chips">
          <div class="text-here">
            <p v-for="newproduct in produkAmericanEagle">
              <router-link :to="'/check/' + newproduct.params">
                <span class="text-here">{{ newproduct.name }}</span>
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size: 25px; margin-left: 50px; justify-content: space-between; margin-top: 50px;">
      <b>New Product</b>
      <span style="margin-left: 1100px; font-family: inter; font-size: 16px; color: #009499;">See All</span>
    </p>
  </div>
  <div class="horizontal-list">
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar6.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="vintage-chicago-cubs-white-crewneck">
          Vintage chicago cubs white crewneck
        </div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33343 14C8.13656 14 7.94281 13.9406 7.77093 13.825C6.59593 13.0281 4.88968 11.7937 3.66468 10.3C2.41468 8.77813 1.81468 7.2125 1.83343 5.51875C1.85218 3.57813 3.41156 2 5.30531 2C6.80843 2 7.80531 2.92188 8.33343 3.59375C8.86156 2.92188 9.85843 2 11.3616 2C13.2553 2 14.8116 3.57813 14.8334 5.51875C14.8491 7.2125 14.2522 8.77813 13.0022 10.3C11.7772 11.7937 10.0709 13.0281 8.89593 13.825C8.72406 13.9437 8.53031 14 8.33343 14ZM5.30531 3C3.95843 3 2.84906 4.13438 2.83343 5.53125C2.79906 8.8 5.59593 11.1438 8.33343 13C11.0709 11.1406 13.8678 8.8 13.8334 5.53125C13.8178 4.1375 12.7116 3 11.3616 3C9.67406 3 8.78656 4.70625 8.78031 4.725C8.69593 4.89375 8.52406 5 8.33343 5C8.14281 5 7.97093 4.89375 7.88656 4.72188C7.87718 4.70625 6.98968 3 5.30531 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar7.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="red-crewneck">Red Crewneck</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart2" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.66693 14C8.47005 14 8.2763 13.9406 8.10443 13.825C6.92943 13.0281 5.22318 11.7937 3.99818 10.3C2.74818 8.77813 2.14818 7.2125 2.16693 5.51875C2.18568 3.57813 3.74506 2 5.63881 2C7.14193 2 8.1388 2.92188 8.66693 3.59375C9.19505 2.92188 10.1919 2 11.6951 2C13.5888 2 15.1451 3.57813 15.1669 5.51875C15.1826 7.2125 14.5857 8.77813 13.3357 10.3C12.1107 11.7937 10.4044 13.0281 9.22943 13.825C9.05755 13.9437 8.8638 14 8.66693 14ZM5.63881 3C4.29193 3 3.18255 4.13438 3.16693 5.53125C3.13255 8.8 5.92943 11.1438 8.66693 13C11.4044 11.1406 14.2013 8.8 14.1669 5.53125C14.1513 4.1375 13.0451 3 11.6951 3C10.0076 3 9.12005 4.70625 9.1138 4.725C9.02943 4.89375 8.85755 5 8.66693 5C8.4763 5 8.30443 4.89375 8.22005 4.72188C8.21068 4.70625 7.32318 3 5.63881 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar8.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="necklace">Necklace</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.99994 14C7.80306 14 7.60931 13.9406 7.43744 13.825C6.26244 13.0281 4.55619 11.7937 3.33119 10.3C2.08119 8.77813 1.48119 7.2125 1.49994 5.51875C1.51869 3.57813 3.07806 2 4.97181 2C6.47494 2 7.47181 2.92188 7.99994 3.59375C8.52806 2.92188 9.52494 2 11.0281 2C12.9218 2 14.4781 3.57813 14.4999 5.51875C14.5156 7.2125 13.9187 8.77813 12.6687 10.3C11.4437 11.7937 9.73744 13.0281 8.56244 13.825C8.39056 13.9437 8.19681 14 7.99994 14ZM4.97181 3C3.62494 3 2.51556 4.13438 2.49994 5.53125C2.46556 8.8 5.26244 11.1438 7.99994 13C10.7374 11.1406 13.5343 8.8 13.4999 5.53125C13.4843 4.1375 12.3781 3 11.0281 3C9.34056 3 8.45306 4.70625 8.44681 4.725C8.36244 4.89375 8.19056 5 7.99994 5C7.80931 5 7.63744 4.89375 7.55306 4.72188C7.54369 4.70625 6.65619 3 4.97181 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar9.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="necklace">Necklace</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart4" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.33343 14C8.13656 14 7.94281 13.9406 7.77093 13.825C6.59593 13.0281 4.88968 11.7937 3.66468 10.3C2.41468 8.77813 1.81468 7.2125 1.83343 5.51875C1.85218 3.57813 3.41156 2 5.30531 2C6.80843 2 7.80531 2.92188 8.33343 3.59375C8.86156 2.92188 9.85843 2 11.3616 2C13.2553 2 14.8116 3.57813 14.8334 5.51875C14.8491 7.2125 14.2522 8.77813 13.0022 10.3C11.7772 11.7937 10.0709 13.0281 8.89593 13.825C8.72406 13.9437 8.53031 14 8.33343 14ZM5.30531 3C3.95843 3 2.84906 4.13438 2.83343 5.53125C2.79906 8.8 5.59593 11.1438 8.33343 13C11.0709 11.1406 13.8678 8.8 13.8334 5.53125C13.8178 4.1375 12.7116 3 11.3616 3C9.67406 3 8.78656 4.70625 8.78031 4.725C8.69593 4.89375 8.52406 5 8.33343 5C8.14281 5 7.97093 4.89375 7.88656 4.72188C7.87718 4.70625 6.98968 3 5.30531 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p v-for="newproduct in descriptionProduct">
        <router-link :to="'/info/' + newproduct.params">
          <img class="thumbnail-image" src="../../assets/Gambar10.png" />
        </router-link>
      </p>
      <div class="detail">
        <div class="rp-200-000">Rp200.000</div>
        <div class="necklace">Necklace</div>
        <div class="wrapper">
          <div class="_8-m">8 / M</div>
          <div class="like-info">
            <svg class="heart5" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.66644 14C8.46957 14 8.27582 13.9406 8.10394 13.825C6.92894 13.0281 5.22269 11.7937 3.99769 10.3C2.74769 8.77813 2.14769 7.2125 2.16644 5.51875C2.18519 3.57813 3.74457 2 5.63832 2C7.14144 2 8.13832 2.92188 8.66644 3.59375C9.19457 2.92188 10.1914 2 11.6946 2C13.5883 2 15.1446 3.57813 15.1664 5.51875C15.1821 7.2125 14.5852 8.77813 13.3352 10.3C12.1102 11.7937 10.4039 13.0281 9.22894 13.825C9.05707 13.9437 8.86332 14 8.66644 14ZM5.63832 3C4.29144 3 3.18207 4.13438 3.16644 5.53125C3.13207 8.8 5.92894 11.1438 8.66644 13C11.4039 11.1406 14.2008 8.8 14.1664 5.53125C14.1508 4.1375 13.0446 3 11.6946 3C10.0071 3 9.11957 4.70625 9.11332 4.725C9.02894 4.89375 8.85707 5 8.66644 5C8.47582 5 8.30394 4.89375 8.21957 4.72188C8.21019 4.70625 7.32269 3 5.63832 3Z"
                fill="#616161" />
            </svg>
            <div class="_12">12</div>
          </div>
        </div>
      </div>
    </div>
    <div class="item2">
      <div class="see-all-new-product">
        <p v-for="newproduct in allProduct">
          <router-link :to="'/all/' + newproduct.params">
            <span class="text-here"><span style="text-decoration: none; color: #009499;">{{ newproduct.name
            }}</span></span>
          </router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="brands d-flex justify-content-between overflow-x-scroll">
    <!-- <div class="brand__cards" v-for="b in brands" @click="findByBrand(b)">
      {{ b }}
    </div> -->
  </div>
  <div>

  </div>
</template>

<!-- <script setup>
import { useRouter } from "vue-router";
const brands = ref(["Vans", "Boho", "Mango", "Reebok", "Converse", "Sandro", "Nike", "Adidas", "Dior", "Puma", "Zara", "Bershka", "American Eagle"]);
const router = useRouter();

function findByBrand(brand) {
  router.push({
    name: "Brand",
    query: { brand },
  });
}
</script> -->

<script>
export default {
  data() {
    return {
      product: [
        { params: 'vans', name: 'Vans' }
      ],
      produkNew: [
        { params: 'bohoo', name: 'Bohoo' }
      ],
      produkMango: [
        { params: 'mango', name: 'Mango' }
      ],
      produkReebok: [
        { params: 'rebook', name: 'Rebook' }
      ],
      produkConverse: [
        { params: 'converse', name: 'Converse' }
      ],
      produkSandro: [
        { params: 'sandro', name: 'Sandro' }
      ],
      produkNike: [
        { params: 'nike', name: 'Nike' }
      ],
      produkAdidas: [
        { params: 'adidas', name: 'Adidas' }
      ],
      produkDior: [
        { params: 'dior', name: 'Dior' }
      ],
      produkPuma: [
        { params: 'puma', name: 'Puma' }
      ],
      produkZara: [
        { params: 'zara', name: 'Zara' }
      ],
      produkBershka: [
        { params: 'bershka', name: 'Bershka' }
      ],
      produkAmericanEagle: [
        { params: 'american eagle', name: 'American Eagle' }
      ],
      allProduct: [
        { params: 'see-all-product', name: 'See All Product' }
      ],
      allProductFirst: [
        { params: 'see-all-product', name: 'See All Product' }
      ],
      descriptionProduct: [
        { params: 'info-all-product', name: 'Info All Product' }
      ]
    }

    // defineProps({
    //   allProduct: Array
    // })
  }

}

</script>

<style scoped>
.horizontal-list,
.horizontal-list * {
  box-sizing: border-box;
  padding-top: 10px;
  margin: auto;
}

.horizontal-list {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 1200px;
  position: relative;
  margin-bottom: 50px;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  position: relative;
}

.thumbnail-image {
  border-radius: 2px;
  align-self: stretch;
  flex-shrink: 0;
  height: 200px;
  position: relative;
  object-fit: cover;
}

.detail {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.rp-200-000 {
  color: var(--light-secondary-pressed, #0d6b6f);
  text-align: left;
  font-family: var(--title-sm-font-family, "Inter-Medium", sans-serif);
  font-size: var(--title-sm-font-size, 16px);
  line-height: var(--title-sm-line-height, 24px);
  font-weight: var(--title-sm-font-weight, 500);
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.vintage-chicago-cubs-white-crewneck {
  color: var(--global-neutral-90, #404040);
  text-align: left;
  font-family: var(--body-md-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-md-font-size, 14px);
  line-height: var(--body-md-line-height, 20px);
  font-weight: var(--body-md-font-weight, 400);
  position: relative;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.wrapper {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

._8-m {
  color: var(--global-neutral-80, #616161);
  text-align: left;
  font-family: var(--body-md-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-md-font-size, 14px);
  line-height: var(--body-md-line-height, 20px);
  font-weight: var(--body-md-font-weight, 400);
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.like-info {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.heart {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}

._12 {
  color: var(--global-neutral-80, #616161);
  text-align: left;
  font-family: var(--body-md-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-md-font-size, 14px);
  line-height: var(--body-md-line-height, 20px);
  font-weight: var(--body-md-font-weight, 400);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.red-crewneck {
  color: var(--global-neutral-90, #404040);
  text-align: left;
  font-family: var(--body-md-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-md-font-size, 14px);
  line-height: var(--body-md-line-height, 20px);
  font-weight: var(--body-md-font-weight, 400);
  position: relative;
  align-self: stretch;
  height: 40px;
}

.heart2 {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}

.necklace {
  color: var(--global-neutral-90, #404040);
  text-align: left;
  font-family: var(--body-md-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-md-font-size, 14px);
  line-height: var(--body-md-line-height, 20px);
  font-weight: var(--body-md-font-weight, 400);
  position: relative;
  align-self: stretch;
  height: 40px;
}

.heart3 {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}

.heart4 {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}

.heart5 {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  position: relative;
  overflow: visible;
}

.item2 {
  background: var(--light-secondary-surface, #ebfeff);
  border-style: solid;
  border-color: var(--light-secondary-border, #c2fafd);
  border-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 300px;
  position: relative;
}

.see-all-product {
  color: var(--light-secondary-main, #009499);
  text-align: left;
  font-family: var(--body-1-regular-font-family, "Inter-Regular", sans-serif);
  font-size: var(--body-1-regular-font-size, 16px);
  line-height: var(--body-1-regular-line-height, 24px);
  font-weight: var(--body-1-regular-font-weight, 400);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.filter-brand,
.filter-brand * {
  box-sizing: border-box;
}

.filter-brand {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
}

.wrapper {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.filter-chips {
  background: var(--global-neutral-10, #ffffff);
  border-radius: 4px;
  border-style: solid;
  border-color: var(--global-neutral-40, #e0e0e0);
  border-width: 1px;
  padding: 6px 16px 6px 16px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.text-here {
  color: var(--global-neutral-90, #404040);
  text-align: left;
  font-family: var(--label-lg-font-family, "Inter-Medium", sans-serif);
  font-size: var(--label-lg-font-size, 14px);
  line-height: var(--label-lg-line-height, 20px);
  font-weight: var(--label-lg-font-weight, 500);
  position: relative;
  text-decoration: none;
}

.atur-brand {
  margin: auto;
  padding: 30px;
  margin-left: 140px;
}

.brand-title {
  color: #000;

  /* Headline 4/Medium */
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  /* 133.333% */
}
</style>
  