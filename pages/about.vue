<script lang="ts" setup>
const name = ref("John");
name.value = "Jane";

const count = ref(10);

const doublecount = computed(() => count.value * 2);
</script>

<template>
  <div
    class="banner-header valign bg-img bg-fixed tw-bg-[url('/assets/img/slider/7.jpg')] tw-bg-cover tw-bg-center"
    data-overlay-dark="6"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center caption mt-60">
          <h5>Who are we</h5>
          <h1>About Us <span>Our History</span></h1>
        </div>
      </div>
    </div>
  </div>
  <!-- About -->
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-30">
          <div class="section-head mb-20">
            <div class="section-subtitle">Candóre Restaurant</div>
            <div class="section-title">Few Words About Us</div>
          </div>
          <p class="tw-text-[#777]">
            Restaurant vulputate massa sit amet ravida haretra nuam enim mi
            obortis eset uctus enec accumsan eu justo aliquam sit amet auctor
            orci donec vitae vehicula risus duise nunc sapien, accumsan id
            mauris ac ullamcorper rutrum asiquam congue nie ipsum auctor
            frinilla donec finibus sapien ut leo cursus ullamco.
          </p>
          <p class="tw-text-[#777]">
            Wine porta laoreet ante, luctus maximus ipsum blandit eget. Integer
            mollis eniman metus, eget consequat enim commodo eduis id magna arcu
            duis nec elit praesent convallis et justo nec tristique sapien quis.
          </p>
          <!-- reservation -->
          <div class="reservations">
            <div class="icon"><span class="flaticon-tray-1"></span></div>
            <div class="text">
              <p>Reservation</p>
              <a href="tel:855-100-4444">855 100 4444</a>
            </div>
          </div>
        </div>
        <div class="col col-md-3">
          <img src="/assets/img/about2.jpg" alt="" class="mt-90 mb-30" />
        </div>
        <div class="col col-md-3">
          <img src="/assets/img/about.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- Chef -->
  <section class="about section-padding bg-blck">
    <div class="container">
      <div class="row">
        <div class="col-md-5 offset-md-1 mb-30">
          <img src="/assets/img/chef/chef.jpg" alt="" />
        </div>
        <div class="col-md-5 valign mb-30">
          <div class="row">
            <div class="col-md-12">
              <div class="section-head mb-20">
                <div class="section-subtitle">20 Year of Experience</div>
                <div class="section-title white">Big Chef's Menu</div>
              </div>
              <p>
                Restaurant vulputate massa ons amet ravida haretra nuam the
                drana miss uctus enec accumsan eu justo aliquam sit amet auctor
                orci done vitae vehicula risus duise nunc sapien, accumsan id
                mauris rutrum asiquam congue nie ipsum auctor frinilla finibus
                sapien.
              </p>
              <div class="about-bottom">
                <img
                  src="/assets/img/signature.svg"
                  alt=""
                  class="image about-signature"
                />
                <div class="about-name-wrapper">
                  <div class="about-name">Harold Brown</div>
                  <div class="about-rol">Master Chef</div>
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
            <div class="section-subtitle">Should to Try</div>
            <div class="section-title">Chef Recommends</div>
            <div class="section-backtitle">Menu</div>
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
              <img src="/assets/img/chef/hamburger.jpg" alt="" />
            </div>
            <span class="category">NEW</span>
            <div class="con">
              <div class="icon flaticon-hamburger-1"></div>
              <h6>Food</h6>
              <h5>Rusty’s Burger</h5>
              <div class="line"></div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="permalink">
                    Smoked pulled beef ribs, bbq sauce...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item">
            <div class="position-re o-hidden">
              <img src="/assets/img/chef/salad.jpg" alt="" />
            </div>
            <!-- <span class="category"><a href="#0">$12.00</a></span> -->
            <div class="con">
              <div class="icon flaticon-salad"></div>
              <h6>Salad</h6>
              <h5>Waldorf Salad</h5>
              <div class="line"></div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="permalink">
                    Lettuce, celery, apple, grape, walnut...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item">
            <div class="position-re o-hidden">
              <img src="/assets/img/chef/wine.jpg" alt="" />
            </div>
            <div class="con">
              <div class="icon flaticon-whisky"></div>
              <h6>Wine</h6>
              <h5>Corvo Dal 1824</h5>
              <div class="line"></div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="permalink">Dessert Wine, Bordeaux, Graves...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Team -->
  <section class="team section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-head text-center">
            <div class="section-subtitle">Our Experts</div>
            <div class="section-title white">Meet Our Chefs</div>
            <div class="section-backtitle">Chefs</div>
            <span class="icon white">
              <i class="flaticon-chef"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="owl-carousel owl-theme">
            <div class="team-card mb-30">
              <div class="team-img">
                <img src="/assets/img/team/chef1.jpg" alt="" class="w-100" />
              </div>
              <div class="team-content">
                <h3 class="team-title">
                  Raphael Moss<span>Executive Head Chef</span>
                </h3>
                <p class="team-text">
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis euro
                  vesatien arcuman ontese auctor ac aleuam aretra.
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
                <h3 class="mb-0">
                  Raphael Moss<span>Executive Head Chef</span>
                </h3>
              </div>
            </div>
            <div class="team-card mb-30">
              <div class="team-img">
                <img src="/assets/img/team/chef2.jpg" alt="" class="w-100" />
              </div>
              <div class="team-content">
                <h3 class="team-title">
                  Martha Martin<span>Executive Chef</span>
                </h3>
                <p class="team-text">
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis euro
                  vesatien arcuman ontese auctor ac aleuam aretra.
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
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis euro
                  vesatien arcuman ontese auctor ac aleuam aretra.
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
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Booking Form -->
  <section class="testimonials">
    <div
      class="background bg-img bg-fixed section-padding pb-0"
      data-background="/assets/img/banner12.jpg"
      data-overlay-dark="7"
    >
      <div class="container">
        <div class="row">
          <!-- Reservation -->
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
          <!-- Booking From -->
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
  </section>
  <!-- Clients -->
  <section class="clients">
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
  </section>
</template>

<style></style>
