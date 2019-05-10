<template>
  <div class="home">
    <div class="home_main">
      <div class="home-wrap">
        <div class="hero">
          <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero">
          <p
            class="description"
          >{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
          <h1>{{ data.heroText || $title || 'Hello' }}</h1>
          <p class="action" v-if="data.actionText && data.actionLink">
            <a href="mailto:mail@dutchblockchainweek.com" class="action-button">Sponsor or speaker</a>
            <NavLink class="action-button" :item="actionLink"/>
          </p>
        </div>
      </div>
    </div>
    <div class="home_about">
      <div class="home-wrap">
        <h2 class="home_about-title">
          <b>About</b> Dutch Blockchain Week
        </h2>
        <Content custom/>
      </div>
    </div>
    <div class="home_features">
      <div class="home-wrap">
        <div class="features" v-if="data.features && data.features.length">
          <div class="title">
            <h2>
              <b>Venues</b> of Dutch Blockchain Week
            </h2>
          </div>
          <div class="feature" v-for="feature in data.features">
            <h2>{{ feature.title }}</h2>
            <p>{{ feature.details }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home_about">
      <div class="home-wrap">
        <h2 class="home_about-title center">
          <b>Pre</b> register
        </h2>
        <div>
          <p>
            Pre-register for the upcoming Dutch Blockchain Week 2019 and stay updated on all the news, updates &amp; events during this week.
            <!-- Begin Mailchimp Signup Form -->
          </p>
          <div id="mc_embed_signup">
            <form
              action="https://foundation.us20.list-manage.com/subscribe/post?u=d9e7c2f15ffc4f23b4094d7c2&amp;id=afedecca3a"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  value
                  name="EMAIL"
                  class="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                >
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                    name="b_d9e7c2f15ffc4f23b4094d7c2_afedecca3a"
                    tabindex="-1"
                    value
                  >
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  >
                </div>
              </div>
            </form>
          </div>

          <!--End mc_embed_signup-->
        </div>
      </div>
    </div>
    <div class="footer" v-if="data.footer">
      <span v-for="link in data.footer">
        <a href="https://www.blockchain-netherlands.com/">Blockchain Netherlands</a>&nbsp; | &nbsp;
        <a href="mail@dutchblockchainweek.com">Contact</a>&nbsp; | &nbsp;
        <a href="https://twitter.com/DutchBlockWeek">Twitter</a>&nbsp; | &nbsp;
        <a href="https://t.me/Dutchblockchainweek">Telegram</a>
      </span>
      <p class="action" v-if="data.actionText && data.actionLink">
        <NavLink class="action-button" :item="actionLink"/>
      </p>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  components: { NavLink },
  mounted() {
    let sharethisScript = document.createElement("script");
    sharethisScript.setAttribute(
      "src",
      "//platform-api.sharethis.com/js/sharethis.js#property=5ccc6b3e0ff462001290def4&product=sop"
    );
    document.head.appendChild(sharethisScript);
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl';

#mc_embed_signup form {
  padding: 10px 0 10px 0;
}

.mc-field-group {
  display: inline-block;
}

/* positions input field horizontally */
#mc_embed_signup input.email {
  padding: 8px;
  border: 1px solid #ABB0B2;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  color: #343434;
  background-color: #fff;
  box-sizing: border-box;
  height: 32px;
  display: inline-block;
  margin: 0;
  width: 350px;
  vertical-align: top;
}

#mc_embed_signup label {
  display: block;
  font-size: 16px;
  padding-bottom: 10px;
  font-weight: bold;
}

#mc_embed_signup .clear { /* positions button horizontally in line with input */
  display: inline-block;
}

/* positions button horizontally in line with input */
#mc_embed_signup .button {
  font-size: 13px;
  border: none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  letter-spacing: 0.03em;
  box-sizing: border-box;
  height: 32px;
  line-height: 32px;
  padding: 0 18px;
  display: inline-block;
  margin: 0;
  transition: all 0.23s ease-in-out 0s;
}

#mc_embed_signup .button:hover {
  background-color: #777;
  cursor: pointer;
}

#mc_embed_signup div#mce-responses {
  float: left;
  top: -1.4em;
  padding: 0em 0.5em 0em 0.5em;
  overflow: hidden;
  width: 90%;
  margin: 0 5%;
  clear: both;
}

#mc_embed_signup div.response {
  margin: 1em 0;
  padding: 1em 0.5em 0.5em 0;
  font-weight: bold;
  float: left;
  top: -1.5em;
  z-index: 1;
  width: 80%;
}

#mc_embed_signup #mce-error-response {
  display: none;
}

#mc_embed_signup #mce-success-response {
  color: #529214;
  display: none;
}

#mc_embed_signup label.error {
  display: block;
  float: none;
  width: auto;
  margin-left: 1.05em;
  text-align: left;
  padding: 0.5em 0;
}

@media (max-width: 768px) {
  #mc_embed_signup input.email {
    width: 100%;
    margin-bottom: 5px;
  }

  #mc_embed_signup .clear {
    display: block;
    width: 100%;
  }

  #mc_embed_signup .button {
    width: 100%;
    margin: 0;
  }
}

.button {
  position: relative;
  display: inline;
  width: 120px;
  border: 0;
}

.home {
  // padding $navbarHeight 2rem 0
  // max-width 960px
  // margin 0px auto
  &-wrap {
    padding: $navbarHeight 2rem 0;
    max-width: 960px;
    margin: 0px auto;
  }

  &_main {
    background: url('~/main-bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: left bottom;
    background-repeat: no-repeat;
    color: #fff;
    padding: 200px 0;
  }

  &_about {
    background: #000;
    color: #fff;

    hr, br {
      display: none;
    }

    .home-wrap {
      padding: 80px 1.5rem;

      p {
        margin: 0 0 30px 0;
        max-width: 759px;
      }
    }

    &-title {
      font-size: 48px;
      font-weight: 300;
      border-bottom: none;
      margin: 0 0 38px 0;
    }
  }

  &_features {
    background: url('~/features-bg.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: left top;
    background-repeat: no-repeat;
    color: #fff;

    .home-wrap {
      padding: 80px 1.5rem 55px;
    }
  }

  .hero {
    background: none;
    text-align: center;

    img {
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }

    h1 {
      margin-top: 0;
      font-size: 48px;
    }

    .description {
      margin: 15px auto;
    }

    .action {
      margin: 30px auto;
    }

    .description {
      max-width: 35rem;
      font-size: 20px;
      line-height: 1.3;
      color: #fff;
    }

    .action-button {
      display: inline-block;
      font-size: 18px;
      color: #fff;
      background-color: #000;
      padding: 0.8rem 2rem;
      border-radius: 29px;
      transition: border 0.2s ease-in-out;
      border: 1px solid #000;
      box-sizing: border-box;

      // border-bottom 1px solid darken($accentColor, 10%)
      &:hover {
        border: 1px solid $accentColor;
      }
    }
  }

  .features {
    .title {
      padding: 0;
      width: 100%;

      h2 {
        border-bottom: 0 none;
        margin: 0 0 37px 0;
        font-size: 48px;
        font-weight: 300;
      }
    }

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    max-width: 48%;
    box-sizing: border-box;
    margin: 0 0 20px 0;

    h2 {
      font-size: 28px;
      font-weight: 400;
      border-bottom: none;
      padding-bottom: 0;
      color: #fff;
      margin: 15px 0;
    }

    p {
      color: #fff;
      margin: 15px 0;
    }
  }

  .footer {
    padding: 0.9rem 3.9rem;
    background: #000;
    text-align: center;
    color: lighten($textColor, 25%);
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      a {
        color: #fff;
        opacity: 0.8;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: $accentColor;
        }
      }
    }

    .action {
      margin: 0;
      display: inline-block;
      padding: 0.8rem 2rem;
      border-radius: 29px;
      transition: border 0.2s ease-in-out;
      border: 1px solid #000;
      box-sizing: border-box;
      font-size: 18px;

      &:hover {
        border: 1px solid $accentColor;
      }

      a {
        color: #fff;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home {
    &_about {
      .home-wrap {
        padding: 40px 1.5rem;
      }
    }

    &_features {
      .home-wrap {
        padding: 40px 1.5rem 20px;
      }
    }

    &_main {
      padding: 100px 0;
    }

    .features {
      flex-direction: column;

      .title {
        h2 {
          font-size: 34px;
        }
      }
    }

    .feature {
      max-width: 100%;
    }

    .footer {
      padding: 0.9rem 1.5rem;

      .action {
        font-size: 14px;
      }

      span {
        font-size: 14px;
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
        margin: 0 1.2rem 2rem;
      }

      .description, .action {
        margin: 0.2rem auto 0.8rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        margin: 5px 0 0 0;
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }

    .footer {
      flex-direction: column;

      span {
        order: 1;
        margin: 20px 0 0 0;
        font-size: 12px;
      }
    }
  }
}
</style>
