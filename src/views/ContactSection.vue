<template>
  <!-- start of contact section -->
  <section id="contact" class="contact-section section" tabindex="-1">
    <div class="container mx-auto px-4">
      <div class="section-content grid grid-cols-12">
        <!-- text box -->
        <div class="contact-text col-span-12 lg:col-span-6">
          <div class="text-box-inline">
            <span class="subtitle">contact</span>
            <h2>
              Have You Any Project?
              <br />
              Please Drop a Message
            </h2>
            <p>
              Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as
              soon as possible.
            </p>
          </div>

          <!-- contact info -->
          <ul class="contact-info">
            <li>
              <img src="@/assets/icons/address.png" alt="Address" />
              <div>
                <strong>Address:</strong>
                Richmond, BC, Vancouver
              </div>
            </li>
            <!-- <li>
              <img src="@/assets/icons/phone.png" alt="Phone" />
              <div>
                <strong>Phone:</strong>

                <ul>
                  <li>
                    <a href="tel:+18167967170" class="ltr-dir"> (+1) 816 796 7170 </a>
                  </li>
                </ul>
              </div>
            </li> -->

            <li>
              <img src="@/assets/icons/email.png" alt="Email" />
              <div>
                <strong>Email:</strong>
                <ul>
                  <li>
                    <a href="mailto:ryzen.sript@gmail.com">ryzen.sript@gmail.com</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <!-- social links -->
          <ul class="social">
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fab fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                <i class="fab fa-youtube" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <!-- contact form -->
        <div class="col-span-12 lg:col-span-6">
          <form
            ref="contactForm"
            class="contact-form form-styled"
            data-success-msg="Message sent successfully!"
            data-err-msg="Oops! something went wrong, please try again."
          >
            <div class="group">
              <label>Name</label>
              <div class="control has-prefix-icon">
                <input type="text" name="name" placeholder="" minlength="3" required />
                <i class="fas fa-user-circle prefix-icon" aria-hidden="true" />

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="required" type="hidden" value="Name is required" />
                  <input
                    class="minLength"
                    type="hidden"
                    value="Name must be at least 3 characters"
                  />
                </div>
              </div>
            </div>
            <div class="group">
              <label>Email</label>
              <div class="control has-prefix-icon">
                <input
                  class="ltr-dir"
                  type="email"
                  inputmode="email"
                  name="email"
                  placeholder=""
                  required
                />
                <i class="fas fa-envelope prefix-icon" aria-hidden="true" />

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="required" type="hidden" value="Email is required" />
                  <input class="invalid" type="hidden" value="Please enter a valid email address" />
                </div>
              </div>
            </div>
            <div class="group phone-number">
              <label>Phone <span class="optional">(Optional)</span></label>
              <div class="control has-prefix-icon">
                <input type="tel" inputmode="tel" name="phone" placeholder="Phone Number" />
                <i class="fas fa-phone prefix-icon" aria-hidden="true" />

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="invalid" type="hidden" value="Please enter a valid Phone Number" />
                </div>
              </div>
            </div>
            <div class="group">
              <label>Message</label>
              <div class="control has-prefix-icon">
                <textarea name="message" placeholder="Write message..." required></textarea>
                <i class="fas fa-comments prefix-icon" aria-hidden="true" />

                <!-- validation errors messages -->
                <div class="errors-msgs">
                  <input class="required" type="hidden" value="Message is required" />
                </div>
              </div>
            </div>
            <div class="group">
              <div class="control">
                <button
                  class="submit-btn btn btn-dark"
                  type="button"
                  @click="contactFormValidation"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- end of contact section -->
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form);
};
</script>

<!-- <style lang="scss" scoped>
.contact-page {
  min-height: 100vh;
}

.contact-info {
  margin-top: 50px;

  li {
    display: flex;
    align-content: flex-start;
  }
  > li:not(:last-of-type) {
    margin-bottom: 20px;
  }
  li img {
    filter: invert(1);
    margin-right: 18px;
    height: 24px;
  }
}

.social {
  margin: 30px -5px -10px;
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    margin: 0 5px 10px;
    border-radius: 50%;
    background-color: white;
  }
}

.form-group {
  input,
  textarea {
    background: color.adjust($dark-bg, $lightness: 5%);
    border: 1px solid color.adjust($dark-bg, $lightness: 10%);
    color: $light-text;

    &:focus {
      border-color: $primary-color;
      outline: none;
    }
  }
}

.contact-item {
  a {
    transition: color 0.3s ease;
  }
}
</style> -->
