<script setup>
import { ref, onUnmounted, onMounted } from "vue";
import { useJquery } from "~/composables/useJquery";
import { navigationItems, hasSubmenu, hasDropdown } from "@/lib/navData";
// Initialize jQuery plugins
useJquery();

onMounted(() => {
  // Wait for initial content to load
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    const preloaderBg = document.querySelector(".preloader-bg");

    if (preloader) {
      preloader.style.transition = "opacity 0.8s";
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 800);
    }

    if (preloaderBg) {
      setTimeout(() => {
        preloaderBg.style.transition = "opacity 0.8s";
        preloaderBg.style.opacity = "0";
        setTimeout(() => {
          preloaderBg.style.display = "none";
        }, 800);
      }, 800);
    }
  }, 0);
});

const isScrolled = ref(false);
const logoSrc = ref("/assets/img/logo_w.svg");
const HandleScroll = () => {
  const scrollPosition = window.scrollY;
  isScrolled.value = scrollPosition > 100;

  logoSrc.value = isScrolled.value
    ? "/assets/img/logo.svg"
    : "/assets/img/logo_w.svg";
};

onMounted(() => {
  window.addEventListener("scroll", HandleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", HandleScroll);
});
</script>

<template>
  <div>
    <canvas class="smoke-canvas" />
    <div class="preloader-bg" />
    <div id="preloader">
      <div id="preloader-status">
        <div class="preloader-position loader">
          <span />
        </div>
      </div>
    </div>
    <div class="progress-wrap cursor-pointer">
      <svg
        class="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>

    <nav :class="['navbar navbar-expand-lg', { 'nav-scroll': isScrolled }]">
      <div class="container">
        <!-- Logo -->
        <div class="logo-wrapper tw-flex">
          <NuxtLink class="logo" to="/">
            <img
              :src="logoSrc"
              class="logo-img !tw-w-[115px] !tw-p-0"
              alt="Logo Kd Bakery"
            />
          </NuxtLink>
          <!--  <a class="logo" href="index.html"> <h2>Candóre <span>Restaurant</span></h2> </a> -->
        </div>
        <!-- Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i class="ti-menu"></i></span>
        </button>
        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li
              v-for="item in navigationItems"
              :key="item.title"
              :class="['nav-item', { dropdown: item.isDropdown }]"
            >
              <!-- Regular link -->
              <NuxtLink
                v-if="!item.isDropdown"
                :to="item.path"
                :class="['nav-link', { '!tw-text-[#402316]': isScrolled }]"
              >
                {{ item.title }}
              </NuxtLink>

              <!-- Dropdown toggle -->
              <a
                v-else
                :class="[
                  'nav-link dropdown-toggle',
                  { '!tw-text-[#402316]': isScrolled },
                ]"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                {{ item.title }} <i class="ti-angle-down"></i>
              </a>

              <!-- Dropdown menu -->
              <ul v-if="hasDropdown(item)" class="dropdown-menu">
                <li
                  v-for="dropdownItem in item.dropdownItems"
                  :key="dropdownItem.title"
                  :class="{
                    'dropdown-submenu dropdown': dropdownItem.isSubmenu,
                  }"
                >
                  <!-- Regular dropdown item -->
                  <NuxtLink
                    v-if="!dropdownItem.isSubmenu"
                    :to="dropdownItem.path"
                    :class="['dropdown-item', { active: dropdownItem.active }]"
                  >
                    <span>{{ dropdownItem.title }}</span>
                  </NuxtLink>

                  <!-- Submenu toggle -->
                  <a
                    v-else
                    class="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    href="#"
                  >
                    <span
                      >{{ dropdownItem.title }} <i class="ti-angle-right"></i
                    ></span>
                  </a>

                  <!-- Submenu items -->
                  <ul v-if="hasSubmenu(dropdownItem)" class="dropdown-menu">
                    <li
                      v-for="submenuItem in dropdownItem.submenuItems"
                      :key="submenuItem.title"
                    >
                      <NuxtLink :to="submenuItem.path" class="dropdown-item">
                        <span>{{ submenuItem.title }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <!-- Cart -->
          <!-- <div class="cart">
            <div class="cart-icon">
              <span class="icon ti-shopping-cart cursor-pointer"></span>
              <div class="mad-count">2</div>
            </div>
            <div class="cart-side">
              <span class="clos ti-close cursor-pointer"></span>
              <div class="titl">
                <h6>Your Cart</h6>
                <span>2 Items</span>
              </div>
              <div class="prods">
                <div class="item">
                  <div class="img">
                    <img src="/assets/img/shop/1.jpg" alt="" />
                  </div>
                  <div class="cont">
                    <h6>Mozzarella Dippers</h6>
                    <div class="price">1 x <span>$20.00</span></div>
                  </div>
                  <div class="del valign">
                    <span class="ti-close cursor-pointer"></span>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src="/assets/img/shop/2.jpg" alt="" />
                  </div>
                  <div class="cont">
                    <h6>Southern Chicken</h6>
                    <div class="price">1 x <span>$30.00</span></div>
                  </div>
                  <div class="del valign">
                    <span class="ti-close cursor-pointer"></span>
                  </div>
                </div>
              </div>
              <div class="total">
                <h6>Subtotal :</h6>
                <p>$50.00</p>
              </div>
              <a href="#0" class="button-5">Checkout</a>
            </div>
          </div> -->
        </div>
      </div>
    </nav>
    <slot />
    <!-- Footer -->
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="footer-column footer-about">
                <h3 class="footer-title">À Propos de KD Mobilier</h3>
                <p class="footer-about-text">
                  KD Mobilier est votre destination ultime pour des meubles de
                  qualité, alliant design moderne et confort. Nous nous
                  engageons à offrir des produits qui embellissent votre espace
                  de vie.
                </p>
                <div class="footer-language">
                  <i class="lni ti-world"></i>
                  <select onchange="location = this.value;">
                    <option value="#0">Français</option>
                    <option value="#0">Anglais</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-3 offset-md-1">
              <div class="footer-column footer-contact">
                <h3 class="footer-title">Informations de Contact</h3>
                <p class="footer-contact-text">
                  1616 Broadway NY, New York 10001 <br />États-Unis
                </p>
                <div class="footer-contact-info">
                  <p class="footer-contact-phone">855 100 4444</p>
                  <p class="footer-contact-mail">info@kdmobilier.com</p>
                </div>
                <div class="footer-about-social-list">
                  <a href="#"><i class="ti-instagram"></i></a>
                  <a href="#"><i class="ti-twitter"></i></a>
                  <a href="#"><i class="ti-youtube"></i></a>
                  <a href="#"><i class="ti-facebook"></i></a>
                  <a href="#"><i class="ti-pinterest"></i></a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-column footer-explore clearfix">
                <h3 class="footer-title">Abonnez-vous</h3>
                <div class="row subscribe">
                  <div class="col-md-12">
                    <p>
                      Souhaitez-vous être informé lors du lancement de nouveaux
                      produits ou mises à jour ? Inscrivez-vous et nous vous
                      enverrons une notification par e-mail.
                    </p>
                    <form>
                      <input
                        type="text"
                        name="search"
                        placeholder="Votre email"
                        required
                      />
                      <button>Abonnez-vous</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="footer-bottom-inner">
                <p class="footer-bottom-copy-right">
                  © Copyright 2025 par <a href="#">KD Mobilier</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
