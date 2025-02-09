<script setup>
// Your script setup here
</script>

<template>
  <div>
    <!-- Header Video -->
    <header class="header">
      <div class="video-fullscreen-wrap">
        <!-- The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. -->
        <div class="video-fullscreen-video" data-overlay-dark="5">
          <video playsinline="" autoplay="" loop="" muted="">
            <source
              src="https://res.cloudinary.com/didh3wbru/video/upload/f_auto:video,q_auto/Se%CC%81quence_01_1_qljljz"
              type="video/mp4"
              autoplay=""
              loop=""
              muted=""
            />
            <source
              src="https://res.cloudinary.com/didh3wbru/video/upload/f_auto:video,q_auto/Se%CC%81quence_01_1_qljljz"
              type="video/webm"
              autoplay=""
              loop=""
              muted=""
            />
          </video>
        </div>
        <div class="v-middle caption overlay">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <h6>KD Bakery</h6>
                <h1>Une expérience unique<span>au Sénégal</span></h1>
                <h4>
                  Rejoignez-nous pour découvrir la perfection de la
                  boulangerie-pâtisserie et l'excellence de notre restaurant.
                </h4>
                <a href="#" data-scroll-nav="2" class="button-1 mt-30"
                  >Rejoignez-nous<span></span
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- slider reservation -->
      <div class="reservation">
        <a href="#">
          <div class="icon d-flex justify-content-center align-items-center">
            <i class="flaticon-tray-1"></i>
          </div>
          <div class="call">
            <span>+221 77 139 82 81</span> <br />Contactez-nous
          </div>
        </a>
      </div>
      <!-- arrow down -->
      <div class="arrow bounce text-center">
        <a href="#" data-scroll-nav="1" class="">
          <i class="ti-arrow-down"></i>
        </a>
      </div>
    </header>

    <!-- About -->
    <section class="about section-padding" data-scroll-index="1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-30">
            <div class="section-head mb-20">
              <div class="section-subtitle">KD Bakery</div>
              <div class="section-title">À Propos de Nous</div>
            </div>
            <p class="tw-text-[#777]">
              KD Bakery est une boulangerie-pâtisserie de luxe alliant également
              un restaurant, offrant une expérience culinaire exceptionnelle au
              Sénégal. Le site internet, actuellement en construction, a pour
              but de non seulement mettre en avant l’exception de la
              boulangerie-pâtisserie, mais aussi de créer une véritable
              communauté autour de cet espace accueillant et raffiné.
            </p>
            <p class="tw-text-[#777]">
              Sous la direction du meilleur chef sénégalais décoré en France, KD
              Bakery promet une cuisine de qualité supérieure alliant traditions
              locales et techniques raffinées. Rejoignez-nous pour découvrir la
              perfection de la pâtisserie et partager des moments inoubliables.
            </p>
            <!-- reservation -->
            <div class="reservations">
              <div class="icon"><span class="flaticon-tray-1"></span></div>
              <div class="text">
                <p>Pour plus d'infos :</p>
                <a href="tel:855-100-4444">+221 77 139 82 81</a>
              </div>
            </div>
          </div>
          <div class="col col-md-3">
            <img
              src="https://res.cloudinary.com/didh3wbru/image/upload/v1738956618/about_2_qwlkgy.jpg"
              alt=""
              class="mt-90 mb-30"
            />
          </div>
          <div class="col col-md-3">
            <img
              src="https://res.cloudinary.com/didh3wbru/image/upload/v1738956617/about_k1h4fp.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Chef -->
    <section class="about section-padding tw-bg-[#0d0705]">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-md-1 mb-30">
            <img
              src="https://res.cloudinary.com/didh3wbru/image/upload/v1738956977/chef_spfldg.jpg"
              alt=""
            />
          </div>
          <div class="col-md-5 valign mb-30">
            <div class="row">
              <div class="col-md-12">
                <div class="section-head mb-20">
                  <div class="section-subtitle">Un Chef, Une Passion</div>
                  <div class="section-title white">Le Menu du Chef</div>
                </div>
                <p>
                  Découvrez l'expertise d'un chef sénégalais décoré, formé en
                  France, où il a perfectionné son art de la pâtisserie. Sa
                  passion pour la cuisine se reflète dans chaque création,
                  alliant traditions sénégalaises et techniques françaises.
                  Engagé envers la qualité et l'artisanat, il crée des
                  expériences culinaires inoubliables dans une ambiance
                  chaleureuse. Venez vivre une rencontre entre luxe et
                  tradition, où chaque bouchée raconte une histoire.
                </p>
                <div class="about-bottom">
                  <img
                    src="/assets/img/signature.svg"
                    alt=""
                    class="image about-signature"
                  />
                  <div class="about-name-wrapper">
                    <div class="about-name">Cheikh Anta Diop</div>
                    <div class="about-rol">Chef Cuisinier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chef Recommends -->
    <section class="chef-recommends section-padding bg-cream">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">À Découvrir</div>
              <div class="section-title">Recommandations du Chef</div>
              <div class="section-backtitle">Menu à Venir</div>
              <span class="icon">
                <i class="flaticon-chef"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="item">
              <div class="position-re o-hidden">
                <img
                  src="https://res.cloudinary.com/didh3wbru/image/upload/v1738960349/mango_patisserie_bwlxf1.jpg"
                  alt="Pâtisserie à la mangue"
                />
              </div>
              <span class="category">NOUVEAU</span>
              <div class="con">
                <div class="icon flaticon-pastry"></div>
                <h6>Pâtisserie</h6>
                <h5>Délice à la Mangue</h5>
                <div class="line"></div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <div class="permalink">
                      Une création exquise alliant la douceur de la mangue
                      sénégalaise et la finesse de la pâtisserie française...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <div class="position-re o-hidden">
                <img
                  src="https://res.cloudinary.com/didh3wbru/image/upload/v1738960349/chocolate_tart_iktwkk.jpg"
                  alt="Tarte au chocolat"
                />
              </div>
              <div class="con">
                <div class="icon flaticon-chocolate"></div>
                <h6>Dessert</h6>
                <h5>Tarte au Chocolat Noir</h5>
                <div class="line"></div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <div class="permalink">
                      Un mélange riche de chocolat noir du Sénégal, créant une
                      expérience gustative inoubliable...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <div class="position-re o-hidden">
                <img
                  src="https://res.cloudinary.com/didh3wbru/image/upload/v1738960348/croissant_fmyvnf.jpg"
                  alt="Croissant au beurre de karité"
                />
              </div>
              <div class="con">
                <div class="icon flaticon-croissant"></div>
                <h6>Pâtisserie</h6>
                <h5>Croissant au Beurre de Karité</h5>
                <div class="line"></div>
                <div class="row">
                  <div class="col-md-12 text-center">
                    <div class="permalink">
                      Un croissant délicat, préparé avec du beurre de karité,
                      offrant une texture et un goût uniques...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <p>
            Inscrivez-vous pour recevoir des informations exclusives sur notre
            ouverture et nos créations gourmandes à venir !
          </p>
        </div>
      </div>
    </section>

    <!-- Avant-Première - Restez Informés -->
    <section
      class="background bg-img bg-fixed section-padding pb-0 tw-bg-[url('https://res.cloudinary.com/didh3wbru/image/upload/v1739017447/banner_5_pruuip.jpg')]"
      data-overlay-dark="3"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="avant-premiere">
              <div class="avant-premiere-box">
                <!-- Removed owl-carousel and owl-theme as we're not using testimonials anymore -->
                <div class="item">
                  <h4 class="mb-4">Avant-Première</h4>
                  <p class="mb-4">
                    KD Bakery, c'est la rencontre de la tradition pâtissière
                    française et des saveurs authentiques du Sénégal. Notre
                    chef, formé aux meilleures écoles, vous prépare une
                    expérience gustative inoubliable.
                  </p>
                  <p class="mb-4">
                    "J'ai toujours rêvé de créer un lieu où le luxe rencontre la
                    convivialité, où chaque bouchée raconte une histoire." -
                    Cheikh Anta Diop, Chef Cuisinier.
                  </p>
                  <!--  countdown component goes here -->
                  <div class="mb-4">
                    <!-- You'll need to implement a countdown component in Vue -->
                    <!-- Example: <Countdown :targetDate="openingDate" /> -->
                    <!-- Replace openingDate with a date object -->
                  </div>
                  <!-- Add more quotes or information here, if available -->
                  <div class="mt-4">
                    <p>
                      Suivez-nous pour les dernières nouvelles et les aperçus
                      exclusifs!
                    </p>
                    <!-- implement social media or share -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-5 offset-md-1">
            <div class="opening-hours-box">
              <div class="head-box">
                <h4>Restez Informés</h4>
              </div>
              <div class="content-box">
                <div class="item">
                  <div class="info">
                    <!-- Newsletter form here -->
                    <form class="newsletter-form">
                      <div class="mb-3">
                        <label for="email" class="form-label tw-text-white"
                          >Votre Email:</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Entrez votre email"
                          required
                        />
                      </div>
                      <button type="submit" class="button-1 mt-15">
                        S'inscrire
                      </button>
                    </form>
                    <p class="mt-4">
                      <small>
                        En vous inscrivant, vous recevrez des nouvelles
                        exclusives sur notre ouverture et nos créations
                        gourmandes.
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              <p class="mt-0">
                <a href="#"><i class="ti-location-pin"></i></a
                ><small>Adresse: [Insérer Adresse ici] Dakar, Sénégal</small>
              </p>
              <p>
                <small
                  >Contactez nous:
                  <a href="tel:+221771398281">+221 77 139 82 81</a></small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Box -->
    <section class="services-box section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="item">
              <span class="icon flaticon-cooking"></span>
              <div class="cont">
                <h5>Fusion de Saveurs</h5>
                <p class="tw-text-[#777]">
                  Une harmonie parfaite entre l'art culinaire et les saveurs
                  traditionnelles du Sénégal.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <span class="icon flaticon-tray-2"></span>
              <div class="cont">
                <h5>Ingrédients d'Exception</h5>
                <p class="tw-text-[#777]">
                  Des ingrédients frais et savoureux, issus du terroir
                  sénégalais, pour une expérience gustative authentique.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <span class="icon flaticon-chef-1"></span>
              <div class="cont">
                <h5>Savoir-faire Artisanal et Luxe</h5>
                <p class="tw-text-[#777]">
                  Un travail artisanal soigné et une attention particulière aux
                  détails pour une expérience culinaire inoubliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- First Class Services -->
    <div class="first-class-services section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">Goûtez à l'Exception</div>
              <div class="section-title white">Nos Créations Signature</div>
              <div class="section-backtitle">Pâtisseries</div>
              <span class="icon white">
                <i class="flaticon-tray-2"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Croissant au Beurre de Karité -->
          <div class="col-md-4">
            <div class="square-flip">
              <div
                class="square bg-img tw-bg-[url('https://res.cloudinary.com/didh3wbru/image/upload/v1739021123/1_og7lqg.jpg')]"
              >
                <!-- Removed sale span -->
                <div
                  class="square-container d-flex align-items-end justify-content-end"
                >
                  <div class="box-title">
                    <div class="icon flaticon-croissant"></div>
                    <h6>Pâtisserie</h6>
                    <h4>Croissant au Beurre de Karité</h4>
                  </div>
                </div>
                <div class="flip-overlay"></div>
              </div>
              <div class="square2">
                <div class="square-container2">
                  <h6>Pâtisserie</h6>
                  <h4>Croissant au Beurre de Karité</h4>
                  <p>
                    <i>
                      Une viennoiserie d'exception, où le beurre de karité
                      révèle une texture fondante et un goût subtilement
                      noisetté. Un incontournable de KD Bakery.
                    </i>
                  </p>
                  <a href="#" class="button-4 mt-15">Découvrir<span></span></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Tarte au Chocolat Noir du Sénégal -->
          <div class="col-md-4">
            <div class="square-flip">
              <div
                class="square bg-img tw-bg-[url('https://res.cloudinary.com/didh3wbru/image/upload/v1739021124/2_smen4c.jpg')]"
              >
                <div
                  class="square-container d-flex align-items-end justify-content-end"
                >
                  <div class="box-title">
                    <div class="icon flaticon-chocolate"></div>
                    <h6>Dessert</h6>
                    <h4>Tarte au Chocolat Noir du Sénégal</h4>
                  </div>
                </div>
                <div class="flip-overlay"></div>
              </div>
              <div class="square2">
                <div class="square-container2">
                  <h6>Dessert</h6>
                  <h4>Tarte au Chocolat Noir du Sénégal</h4>
                  <p>
                    <i>
                      Laissez-vous séduire par l'intensité d'un chocolat noir
                      d'origine sénégalaise, sublimé dans une tarte à la fois
                      riche et délicate. Une expérience gustative inoubliable.
                    </i>
                  </p>
                  <a href="#" class="button-4 mt-15">Découvrir<span></span></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Pâtisserie à la Mangue -->
          <div class="col-md-4">
            <div class="square-flip">
              <div
                class="square bg-img tw-bg-[url('https://res.cloudinary.com/didh3wbru/image/upload/v1739021123/3_cxyiwc.jpg')]"
              >
                <div
                  class="square-container d-flex align-items-end justify-content-end"
                >
                  <div class="box-title">
                    <div class="icon flaticon-pastry"></div>
                    <h6>Pâtisserie</h6>
                    <h4>Pâtisserie à la Mangue</h4>
                  </div>
                </div>
                <div class="flip-overlay"></div>
              </div>
              <div class="square2">
                <div class="square-container2">
                  <h6>Pâtisserie</h6>
                  <h4>Pâtisserie à la Mangue</h4>
                  <p>
                    <i>
                      Un mariage parfait entre la fraîcheur de la mangue
                      sénégalaise et la finesse de la pâtisserie française. Une
                      création légère et fruitée qui vous transportera sous les
                      tropiques.
                    </i>
                  </p>
                  <a href="#" class="button-4 mt-15">Découvrir<span></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Restaurant - Bientôt Disponible Section -->
    <section class="restaurant-preview bg-fixed section-padding bg-cream">
      <!-- bg-cream ou une autre couleur claire -->
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">Expérience Gastronomique</div>
              <div class="section-title">Restaurant - Bientôt Disponible</div>
              <div class="section-backtitle">Restaurant</div>
              <span class="icon">
                <i class="flaticon-chef-1"></i>
                <!-- Icône de chef ou restaurant -->
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center">
            <p class="mb-4 tw-text-[#777]">
              Au-delà de la boulangerie-pâtisserie, KD Bakery vous proposera
              bientôt une expérience culinaire gastronomique unique en son
              genre. Notre chef de renommée internationale élaborera des plats
              raffinés, mettant en valeur les produits d'exception du Sénégal et
              son savoir-faire acquis dans les plus grandes cuisines.
            </p>
            <p class="mb-4 tw-text-[#777]">
              Imaginez des dîners élégants dans un cadre chaleureux et raffiné,
              où chaque plat sera une célébration des saveurs locales et de la
              gastronomie française.
            </p>
            <!-- Citation du Chef (optionnel, mais recommandé) -->
            <blockquote class="blockquote text-center mb-4">
              <p class="mb-0">
                "Mon ambition pour le restaurant de KD Bakery est de créer un
                lieu où la cuisine sénégalaise atteint de nouveaux sommets de
                raffinement, tout en restant authentique et accessible."
              </p>
              <footer class="blockquote-footer">
                Cheikh Anta Diop,
                <cite title="Source Title">Chef Cuisinier</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <!-- Exemples de Catégories de Plats (si vous avez des idées générales) -->
        <div class="row mt-4">
          <div class="col-md-4 text-center">
            <div class="restaurant-category">
              <h6 class="mb-2 font-semibold">Entrées Raffinées</h6>
              <p class="text-sm tw-text-[#777]">
                Amuse-bouches créatifs, saveurs délicates, mises en bouche
                surprenantes... (Exemples à venir)
              </p>
              <!-- Icône ou image optionnelle -->
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="restaurant-category">
              <h6 class="mb-2 font-semibold">Plats Principaux Créatifs</h6>
              <p class="text-sm tw-text-[#777]">
                Viandes nobles, poissons frais, options végétariennes
                inventives... (Exemples à venir)
              </p>
              <!-- Icône ou image optionnelle -->
            </div>
          </div>
          <div class="col-md-4 text-center">
            <div class="restaurant-category">
              <h6 class="mb-2 font-semibold">Desserts Gastronomiques</h6>
              <p class="text-sm tw-text-[#777]">
                Créations sucrées élégantes, accords parfaits, douceurs
                inoubliables... (Exemples à venir)
              </p>
              <!-- Icône ou image optionnelle -->
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-12 text-center">
            <p class="tw-text-[#777]">
              Restez connectés pour découvrir le menu complet du restaurant, la
              date d'ouverture et les informations de réservation !
            </p>
            <!-- Lien vers la section "Restez Informés" ou Newsletter -->
            <a
              href="#"
              data-scroll-nav="7"
              class="button-1 mt-30 tw-text-[#462619] hover:tw-text-white"
              >Restez Informés<span></span
            ></a>
          </div>
        </div>
      </div>
    </section>

    <!-- MenuBook -->
    <section
      class="menu-book tabs section-padding position-re tw-bg-[#462619]"
      data-scroll-index="1"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">Un Aperçu Délicieux</div>
              <div class="section-title white">Avant-Goût Gourmand</div>
              <div class="section-backtitle">Menu à Venir</div>
              <span class="icon white">
                <i class="flaticon-chef"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="tab-links mb-60">
              <ul class="text-center">
                <li class="item-link current" data-tab="tab-1">
                  Pâtisseries & Boulangerie
                </li>
                <!-- Supprimer les autres onglets -->
                <!-- <li class="item-link" data-tab="tab-2">Mains</li>
              <li class="item-link" data-tab="tab-3">Salads</li>
              <li class="item-link" data-tab="tab-4">Desserts</li>
              <li class="item-link" data-tab="tab-5">Wine</li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="position-re">
              <div class="tab-content current" id="tab-1">
                <div class="row">
                  <div class="col-md-6">
                    <div class="menu-list mb-30">
                      <div class="item">
                        <div class="img">
                          <a
                            href="/assets/img/menu/starters/1.jpg"
                            class="image-popup-vertical-fit"
                            title="Croissant Signature Karité"
                          >
                            <img
                              src="/assets/img/menu/starters/1.jpg"
                              alt="Croissant Signature Karité"
                              title="Croissant Signature Karité"
                            />
                          </a>
                        </div>
                        <div class="flex">
                          <div class="title">Croissant Signature Karité</div>
                          <div class="dots"></div>
                          <!-- Suppression du prix pour l'avant-première -->
                        </div>
                        <p>
                          <i
                            >Feuilletage léger et beurre de karité local, une
                            expérience unique.</i
                          >
                        </p>
                      </div>
                    </div>
                    <div class="menu-list mb-30">
                      <div class="item">
                        <div class="img">
                          <a
                            href="/assets/img/menu/starters/2.jpg"
                            class="image-popup-vertical-fit"
                            title="Pain Chocolat Tradition Revisité"
                          >
                            <img
                              src="/assets/img/menu/starters/2.jpg"
                              alt="Pain Chocolat Tradition Revisité"
                              title="Pain Chocolat Tradition Revisité"
                            />
                          </a>
                        </div>
                        <div class="flex">
                          <div class="title">
                            Pain Chocolat Tradition Revisité
                          </div>
                          <div class="dots"></div>
                          <!-- Suppression du prix pour l'avant-première -->
                        </div>
                        <p>
                          <i
                            >Le classique pain au chocolat, sublimé avec une
                            touche de cacao sénégalais.</i
                          >
                        </p>
                      </div>
                    </div>
                    <div class="menu-list mb-30">
                      <div class="item">
                        <div class="img">
                          <a
                            href="/assets/img/menu/starters/3.jpg"
                            class="image-popup-vertical-fit"
                            title="Brioche Karité Orange"
                          >
                            <img
                              src="/assets/img/menu/starters/3.jpg"
                              alt="Brioche Karité Orange"
                              title="Brioche Karité Orange"
                            />
                          </a>
                        </div>
                        <div class="flex">
                          <div class="title">Brioche Karité Orange</div>
                          <div class="dots"></div>
                          <!-- Suppression du prix pour l'avant-première -->
                        </div>
                        <p>
                          <i
                            >Brioche moelleuse au beurre de karité, parfumée à
                            l'orange douce du pays.</i
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="menu-list mb-30">
                      <div class="item">
                        <div class="img">
                          <a
                            href="/assets/img/menu/starters/4.jpg"
                            class="image-popup-vertical-fit"
                            title="Tartelette Mangue Passion"
                          >
                            <img
                              src="/assets/img/menu/starters/4.jpg"
                              alt="Tartelette Mangue Passion"
                              title="Tartelette Mangue Passion"
                            />
                          </a>
                        </div>
                        <div class="flex">
                          <div class="title">Tartelette Mangue Passion</div>
                          <div class="dots"></div>
                          <!-- Suppression du prix pour l'avant-première -->
                        </div>
                        <p>
                          <i
                            >Exotisme et fraîcheur : mangue juteuse et passion
                            acidulée en tartelette.</i
                          >
                        </p>
                      </div>
                    </div>
                    <div class="menu-list mb-30">
                      <div class="item">
                        <div class="img">
                          <a
                            href="/assets/img/menu/desserts/1.jpg"
                            class="image-popup-vertical-fit"
                            title="Cake Baobab Citron Vert"
                          >
                            <img
                              src="/assets/img/menu/desserts/1.jpg"
                              alt="Cake Baobab Citron Vert"
                              title="Cake Baobab Citron Vert"
                            />
                          </a>
                        </div>
                        <div class="flex">
                          <div class="title">Cake Baobab Citron Vert</div>
                          <div class="dots"></div>
                          <!-- Suppression du prix pour l'avant-première -->
                        </div>
                        <p>
                          <i
                            >Le fruit du baobab apporte une touche acidulée
                            unique à ce cake léger.</i
                          >
                        </p>
                      </div>
                    </div>
                    <div class="menu-list mb-30">
                      <div class="item">
                        <div class="img">
                          <a
                            href="/assets/img/menu/desserts/2.jpg"
                            class="image-popup-vertical-fit"
                            title="Pain au Mil Traditionnel"
                          >
                            <img
                              src="/assets/img/menu/desserts/2.jpg"
                              alt="Pain au Mil Traditionnel"
                              title="Pain au Mil Traditionnel"
                            />
                          </a>
                        </div>
                        <div class="flex">
                          <div class="title">Pain au Mil Traditionnel</div>
                          <div class="dots"></div>
                          <!-- Suppression du prix pour l'avant-première -->
                        </div>
                        <p>
                          <i
                            >Redécouvrez la saveur ancestrale du pain de mil,
                            cuit à la perfection.</i
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-12 text-center">
                    <p class="italic text-white-700">
                      *Menu complet et tarifs à découvrir lors de l'ouverture
                      officielle de KD Bakery.*
                    </p>
                  </div>
                </div>
              </div>
              <!-- Supprimer les autres tab-content -->
              <!--
            <div class="tab-content" id="tab-2">
               </div>
            <div class="tab-content" id="tab-3">
               </div>
            <div class="tab-content" id="tab-4">
               </div>
            <div class="tab-content" id="tab-5">
               </div>
             -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Restaurant Video -->
    <section
      class="section-padding video-wrapper video bg-img bg-fixed tw-bg-[url('https://res.cloudinary.com/didh3wbru/image/upload/v1738960741/banner_2_fizmfs.jpg')]"
      data-overlay-dark="4"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">Expérience KD Bakery</div>
              <div class="section-title white">Regardez notre vidéo</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <a class="vid" href="https://vimeo.com/762423057">
              <div class="vid-butn">
                <span class="icon">
                  <i class="ti-control-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- TEAM -->
    <section class="team section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">Notre Expertise</div>
              <div class="section-title white">Rencontrez Notre Chef</div>
              <div class="section-backtitle">Équipe</div>
              <span class="icon white">
                <i class="flaticon-chef"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="owl-carousel owl-theme">
              <!-- Chef Cheikh Anta Diop Card -->
              <div class="team-card mb-30">
                <div class="team-img">
                  <img
                    src="https://res.cloudinary.com/didh3wbru/image/upload/v1738956977/chef_spfldg.jpg"
                    alt="Cheikh Anta Diop - Chef Cuisinier KD Bakery"
                    class="w-100"
                  />
                </div>
                <div class="team-content">
                  <h3 class="team-title">
                    Cheikh Anta Diop<span>Chef Cuisinier</span>
                  </h3>
                  <p class="team-text">
                    Chef de renom, formé en France et passionné par la fusion
                    des traditions culinaires françaises et sénégalaises. Cheikh
                    Anta Diop est le cœur créatif de KD Bakery, apportant son
                    expertise et sa vision unique à chaque création.
                  </p>
                  <!-- Supprimer les liens sociaux si non pertinents pour le chef pour l'instant -->
                  <!-- <div class="social">
                  <div class="full-width">
                    <a href="#"><i class="ti-linkedin"></i></a>
                    <a href="#"><i class="ti-facebook"></i></a>
                    <a href="#"><i class="ti-twitter"></i></a>
                    <a href="#"><i class="ti-instagram"></i></a>
                  </div>
                </div> -->
                </div>
                <div class="title-box">
                  <h3 class="mb-0">
                    Cheikh Anta Diop<span>Chef Cuisinier</span>
                  </h3>
                </div>
              </div>

              <!-- Optionnel: Ajouter d'autres membres de l'équipe ici, si pertinent -->
              <!-- Exemple de carte pour un autre membre (à adapter/décommenter si besoin) -->
              <!-- <div class="team-card mb-30">
              <div class="team-img">
                <img src="/assets/img/team/chef_patissier.jpg" alt="Nom Autre Membre - Titre" class="w-100" />
              </div>
              <div class="team-content">
                <h3 class="team-title">
                  Nom Autre Membre<span>Titre du Membre</span>
                </h3>
                <p class="team-text">
                  Courte description de l'autre membre de l'équipe, son rôle et son expertise chez KD Bakery.
                </p>
                 <div class="social">
                  <div class="full-width">
                    <a href="#"><i class="ti-linkedin"></i></a>
                    <a href="#"><i class="ti-facebook"></i></a>
                    <a href="#"><i class="ti-twitter"></i></a>
                    <a href="#"><i class="ti-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="title-box">
                <h3 class="mb-0">Nom Autre Membre<span>Titre du Membre</span></h3>
              </div>
            </div> -->

              <!-- Supprimer les cartes de chefs génériques -->
              <!--
            <div class="team-card mb-30">
              <div class="team-img">
                <img src="/assets/img/team/chef2.jpg" alt="" class="w-100" />
              </div>
              <div class="team-content">
                <h3 class="team-title">
                  Martha Martin<span>Executive Chef</span>
                </h3>
                <p class="team-text">
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis
                  euro vesatien arcuman ontese auctor ac aleuam aretra.
                </p>
                <div class="social">
                  <div class="full-width">
                    <a href="#"><i class="ti-linkedin"></i></a>
                    <a href="#"><i class="ti-facebook"></i></a>
                    <a href="#"><i class="ti-twitter"></i></a>
                    <a href="#"><i class="ti-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="title-box">
                <h3 class="mb-0">Martha Martin<span>Executive Chef</span></h3>
              </div>
            </div>
            <div class="team-card mb-30">
              <div class="team-img">
                <img src="/assets/img/team/chef3.jpg" alt="" class="w-100" />
              </div>
              <div class="team-content">
                <h3 class="team-title">
                  Robert Dan<span>Group Head Chef</span>
                </h3>
                <p class="team-text">
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis
                  euro vesatien arcuman ontese auctor ac aleuam aretra.
                </p>
                <div class="social">
                  <div class="full-width">
                    <a href="#"><i class="ti-linkedin"></i></a>
                    <a href="#"><i class="ti-facebook"></i></a>
                    <a href="#"><i class="ti-twitter"></i></a>
                    <a href="#"><i class="ti-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div class="title-box">
                <h3 class="mb-0">Robert Dan<span>Group Head Chef</span></h3>
              </div>
            </div>
            --></div>
          </div>
        </div>
      </div>
    </section>
    <!-- Wine Banner -->
    <!-- <section class="wine-banner menu-book bg-blck">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 p-0">
            <div class="img left">
              <img src="/assets/img/banner3.jpg" alt="" />
            </div>
          </div>
          <div class="col-md-6 p-0 valign mb-30">
            <div class="content">
              <div class="section-head mb-60">
                <div class="section-subtitle">Candóre Wine Bar</div>
                <div class="section-title white">Wine Bar Menu</div>
              </div>
              <div class="menu-list mb-30">
                <div class="item">
                  <div class="img">
                    <a
                      href="/assets/img/wine/1.jpg"
                      class="image-popup-vertical-fit"
                      title="Riscos Malbec"
                      ><img src="/assets/img/wine/1.jpg" alt="" title="" />
                    </a>
                  </div>
                  <div class="flex">
                    <div class="title">Riscos Malbec</div>
                    <div class="dots"></div>
                    <div class="price">$25.00</div>
                  </div>
                  <p><i>Full, Redcurrant, Spice, Chile</i></p>
                </div>
              </div>
              <div class="menu-list mb-30">
                <div class="item">
                  <div class="img">
                    <a
                      href="/assets/img/wine/2.jpg"
                      class="image-popup-vertical-fit"
                      title="Dom Perignon"
                      ><img src="/assets/img/wine/2.jpg" alt="" title="" />
                    </a>
                  </div>
                  <div class="flex">
                    <div class="title">Dom Perignon</div>
                    <div class="dots"></div>
                    <div class="price">$30.00</div>
                  </div>
                  <p><i>Stylish, Premium, Iconic, Champagne</i></p>
                </div>
              </div>
              <div class="menu-list mb-30">
                <div class="item">
                  <div class="img">
                    <a
                      href="/assets/img/wine/3.jpg"
                      class="image-popup-vertical-fit"
                      title="Amarone Classico"
                      ><img src="/assets/img/wine/3.jpg" alt="" title="" />
                    </a>
                  </div>
                  <div class="flex">
                    <div class="title">Amarone Classico</div>
                    <div class="dots"></div>
                    <div class="price">$20.00</div>
                  </div>
                  <p><i>Intense, Rich, Spice, Italy</i></p>
                </div>
              </div>
              <div class="menu-list">
                <div class="item">
                  <div class="img">
                    <a
                      href="/assets/img/wine/4.jpg"
                      class="image-popup-vertical-fit"
                      title="Valle Berta Gavi"
                      ><img src="/assets/img/wine/4.jpg" alt="" title="" />
                    </a>
                  </div>
                  <div class="flex">
                    <div class="title">Valle Berta Gavi</div>
                    <div class="dots"></div>
                    <div class="price">$45.00</div>
                  </div>
                  <p><i>Clean, Soft, Honeysuckle, Italy</i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Services -->
    <!-- <section class="services-1 section-padding bg-cream">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">Our Services</div>
              <div class="section-title">Food Category</div>
              <div class="section-backtitle">Services</div>
              <span class="icon">
                <i class="flaticon-hot-food"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="item">
              <span class="flaticon-hamburger-1"></span>
              <h5>Cheeseburger</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the
                drana miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div class="shape">
                <span class="flaticon-hamburger-1"></span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <span class="flaticon-pizza-1"></span>
              <h5>Pizza Slice</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the
                drana miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div class="shape"><span class="flaticon-pizza-1"></span></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <span class="flaticon-coffee-cup"></span>
              <h5>Coffee-Cup</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the
                drana miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div class="shape"><span class="flaticon-coffee-cup"></span></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <span class="flaticon-chicken-leg"></span>
              <h5>Chicken-Leg</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the
                drana miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div class="shape">
                <span class="flaticon-chicken-leg-1"></span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <span class="flaticon-fish"></span>
              <h5>Fish</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the
                drana miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div class="shape"><span class="flaticon-fish"></span></div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item">
              <span class="flaticon-wedding-cake"></span>
              <h5>Wedding Cake</h5>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the
                drana miss uctus enec accumsan aliquam sit sapien.
              </p>
              <div class="shape">
                <span class="flaticon-wedding-cake"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Daily Menu - Parallax Section -->
    <!-- <section class="parallax-header parallax-slider-fade">
      <div class="owl-carousel owl-theme">
     
        <div
          class="text-left item bg-img"
          data-overlay-dark="5"
          data-background="/assets/img/daily/1.jpg"
        >
          <div class="v-middle caption">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <span class="sale">50%</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="o-hidden">
                    <h6>Daily Main Course</h6>
                    <h2>New York Steak</h2>
                    <p>Steak, salt, pepper, olive oil, butter and garlic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-left item bg-img"
          data-overlay-dark="4"
          data-background="/assets/img/daily/2.jpg"
        >
          <div class="v-middle caption">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <span class="sale">30%</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="o-hidden">
                    <h6>Daily Menu Salad</h6>
                    <h2>New Ceaser Salad</h2>
                    <p>Romaine lettuce, croutons, parmigiano</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-left item bg-img"
          data-overlay-dark="5"
          data-background="/assets/img/daily/3.jpg"
        >
          <div class="v-middle caption">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <span class="sale">30$</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="o-hidden">
                    <h6>Daily Menu Dessert</h6>
                    <h2>New York Cheesecake</h2>
                    <p>Cheesecake, strawberry & lime salad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- News -->
    <!-- <section class="news section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-head text-center">
              <div class="section-subtitle">Latest news</div>
              <div class="section-title white">News & Events</div>
              <div class="section-backtitle">Blog</div>
              <span class="icon white">
                <i class="ti-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <div class="position-re o-hidden">
                  <img src="/assets/img/news/1.jpg" alt="" />
                  <div class="date">
                    <a href="post.html"> <span>Dec</span> <i>27</i> </a>
                  </div>
                </div>
                <div class="con">
                  <span class="category">
                    <a href="news.html">Mains</a>
                  </span>
                  <h5>
                    <a href="post.html"
                      >New York Strip Steak with Garlic Butter</a
                    >
                  </h5>
                </div>
              </div>
              <div class="item">
                <div class="position-re o-hidden">
                  <img src="/assets/img/news/2.jpg" alt="" />
                  <div class="date">
                    <a href="post.html"> <span>Dec</span> <i>24</i> </a>
                  </div>
                </div>
                <div class="con">
                  <span class="category">
                    <a href="news.html">Salads</a>
                  </span>
                  <h5>
                    <a href="post.html"
                      >Grilled Salmon Salad With Lime and Herbs Recipe</a
                    >
                  </h5>
                </div>
              </div>
              <div class="item">
                <div class="position-re o-hidden">
                  <img src="/assets/img/news/3.jpg" alt="" />
                  <div class="date">
                    <a href="post.html"> <span>Dec</span> <i>21</i> </a>
                  </div>
                </div>
                <div class="con">
                  <span class="category">
                    <a href="news.html">Desserts</a>
                  </span>
                  <h5>
                    <a href="post.html">The Best Chocolate Cake of Your Life</a>
                  </h5>
                </div>
              </div>
              <div class="item">
                <div class="position-re o-hidden">
                  <img src="/assets/img/news/4.jpg" alt="" />
                  <div class="date">
                    <a href="post.html"> <span>Dec</span> <i>18</i> </a>
                  </div>
                </div>
                <div class="con">
                  <span class="category">
                    <a href="news.html">Drinks</a>
                  </span>
                  <h5>
                    <a href="post.html"
                      >The Best Champagne For All of Your Celebrations</a
                    >
                  </h5>
                </div>
              </div>
              <div class="item">
                <div class="position-re o-hidden">
                  <img src="/assets/img/news/5.jpg" alt="" />
                  <div class="date">
                    <a href="post.html"> <span>Dec</span> <i>15</i> </a>
                  </div>
                </div>
                <div class="con">
                  <span class="category">
                    <a href="news.html">Breakfast</a>
                  </span>
                  <h5>
                    <a href="post.html"
                      >Pratic Toast Recipe That Will Brighten Your Morning</a
                    >
                  </h5>
                </div>
              </div>
              <div class="item">
                <div class="position-re o-hidden">
                  <img src="/assets/img/news/6.jpg" alt="" />
                  <div class="date">
                    <a href="post.html"> <span>Dec</span> <i>08</i> </a>
                  </div>
                </div>
                <div class="con">
                  <span class="category">
                    <a href="news.html">Desserts</a>
                  </span>
                  <h5>
                    <a href="post.html"
                      >Tall and Creamy New York Cheesecake Recipe</a
                    >
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Booking Form -->
    <!-- <section class="testimonials">
      <div
        class="background bg-img bg-fixed section-padding pb-0"
        data-background="/assets/img/banner12.jpg"
        data-overlay-dark="7"
      >
        <div class="container">
          <div class="row">
          
            <div class="col-md-5 mb-30 mt-60">
              <p class="mb-0">
                <i class="star-rating"></i><i class="star-rating"></i
                ><i class="star-rating"></i><i class="star-rating"></i
                ><i class="star-rating"></i>
              </p>
              <h5>
                A modern restaurant with a menu that will make your mouth water.
              </h5>
              <div class="reservations mb-10">
                <div class="icon color-1">
                  <span class="flaticon-tray-1"></span>
                </div>
                <div class="text">
                  <p class="color-1">Reservation</p>
                  <a class="color-1" href="tel:855-100-4444">855 100 4444</a>
                </div>
              </div>
              <p>
                <i class="ti-check"></i><small>Call us, it's toll-free.</small>
              </p>
            </div>
           
            <div class="col-md-5 offset-md-2">
              <div class="booking-box">
                <div class="head-box text-center">
                  <h4>Make A Reservation</h4>
                </div>
                <div class="booking-inner clearfix">
                  <form class="form1 clearfix">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>Your Name</label>
                          <div class="input2_inner">
                            <input
                              type="text"
                              class="form-control input"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>Phone</label>
                          <div class="input2_inner">
                            <input
                              type="text"
                              class="form-control input"
                              placeholder="Phone"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>Email Address</label>
                          <div class="input2_inner">
                            <input
                              type="email"
                              class="form-control input"
                              placeholder="Email Address"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input1_wrapper">
                          <label>Date</label>
                          <div class="input1_inner">
                            <input
                              type="text"
                              class="form-control input datepicker"
                              placeholder="Date"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="select1_wrapper">
                          <label>Persons</label>
                          <div class="select1_inner">
                            <select class="select2 select" style="width: 100%">
                              <option value="0">Persons</option>
                              <option value="1">1 Person</option>
                              <option value="2">2 People</option>
                              <option value="3">3 People</option>
                              <option value="4">4 People</option>
                              <option value="5">5 People</option>
                              <option value="6">6 People</option>
                              <option value="7">7 People</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="select1_wrapper">
                          <label>Time</label>
                          <div class="select1_inner">
                            <select class="select2 select" style="width: 100%">
                              <option value="0">Time</option>
                              <option value="1">10:00 am</option>
                              <option value="2">11:00 am</option>
                              <option value="3">12:00 pm</option>
                              <option value="4">14:00 pm</option>
                              <option value="5">16:00 pm</option>
                              <option value="6">18:00 pm</option>
                              <option value="7">20:00 pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <button type="submit" class="btn-form1-submit mt-15">
                          Check Availability
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Clients -->
    <!-- <section class="clients">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="owl-carousel owl-theme">
              <div class="clients-logo">
                <a href="#0"><img src="/assets/img/clients/2.png" alt="" /></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="/assets/img/clients/3.png" alt="" /></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="/assets/img/clients/4.png" alt="" /></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="/assets/img/clients/5.png" alt="" /></a>
              </div>
              <div class="clients-logo">
                <a href="#0"><img src="/assets/img/clients/6.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>
