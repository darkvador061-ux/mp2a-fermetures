<script setup>
import { ref } from 'vue'

const form = ref({
  nom: '',
  telephone: '',
  email: '',
  type: '',
  message: ''
})

const submitted = ref(false)
const sending = ref(false)

const typesService = [
  'Portail',
  'Porte de garage',
  'Volet roulant',
  'Motorisation / automatisme',
  'Dépannage urgent',
  'Clôture',
  'Contrôle d\'accès',
  'Autre'
]

async function handleSubmit() {
  sending.value = true
  // Simulation envoi — à remplacer par l'appel API réel
  await new Promise(r => setTimeout(r, 800))
  sending.value = false
  submitted.value = true
}
</script>

<template>
  <section class="contact" id="contact">
    <div class="container">

      <div class="contact__header">
        <p class="contact__eyebrow">Réponse sous 24h</p>
        <h2 class="contact__title">Demandez un devis gratuit</h2>
        <p class="contact__intro">
          Décrivez votre projet, nous vous recontactons rapidement pour établir un devis sans engagement.
        </p>
      </div>

      <div class="contact__layout">

        <!-- Formulaire -->
        <div class="contact__form-wrap">
          <form
            v-if="!submitted"
            class="contact__form"
            @submit.prevent="handleSubmit"
            novalidate
          >
            <div class="contact__row">
              <div class="contact__field">
                <label for="contact-nom" class="contact__label">Nom & prénom *</label>
                <input
                  id="contact-nom"
                  v-model="form.nom"
                  type="text"
                  class="contact__input"
                  placeholder="Jean Dupont"
                  required
                  autocomplete="name"
                />
              </div>
              <div class="contact__field">
                <label for="contact-tel" class="contact__label">Téléphone *</label>
                <input
                  id="contact-tel"
                  v-model="form.telephone"
                  type="tel"
                  class="contact__input"
                  placeholder="06 XX XX XX XX"
                  required
                  autocomplete="tel"
                />
              </div>
            </div>

            <div class="contact__field">
              <label for="contact-email" class="contact__label">Email</label>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                class="contact__input"
                placeholder="jean@exemple.fr"
                autocomplete="email"
              />
            </div>

            <div class="contact__field">
              <label for="contact-type" class="contact__label">Type de prestation *</label>
              <select
                id="contact-type"
                v-model="form.type"
                class="contact__input contact__select"
                required
              >
                <option value="" disabled>Choisissez une prestation</option>
                <option v-for="t in typesService" :key="t" :value="t">{{ t }}</option>
              </select>
            </div>

            <div class="contact__field">
              <label for="contact-message" class="contact__label">Votre projet</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                class="contact__input contact__textarea"
                placeholder="Décrivez votre projet : type de portail, dimensions approximatives, localisation…"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" class="contact__submit" :disabled="sending">
              <span v-if="!sending">Envoyer ma demande</span>
              <span v-else>Envoi en cours…</span>
            </button>
          </form>

          <!-- Confirmation -->
          <div v-else class="contact__success">
            <div class="contact__success-icon" aria-hidden="true">✓</div>
            <h3 class="contact__success-title">Demande envoyée !</h3>
            <p>Nous vous recontacterons dans les plus brefs délais.</p>
          </div>
        </div>

        <!-- Infos contact -->
        <aside class="contact__info">
          <div class="contact__info-block">
            <p class="contact__info-label">Téléphones</p>
            <span class="contact__info-text">Anthony — 06 98 25 89 37</span>
            <span class="contact__info-text">Alexandre — 06 84 23 03 76</span>
          </div>

          <div class="contact__info-block">
            <p class="contact__info-label">Email</p>
            <a href="mailto:contact@mp2afermetures.fr" class="contact__info-link">
              contact@mp2afermetures.fr
            </a>
          </div>

          <div class="contact__info-block">
            <p class="contact__info-label">Adresse</p>
            <p class="contact__info-text">
              Hameau du Canadel, Villa 11<br>
              309 Bd Honoré Teisseire<br>
              06480 La Colle-sur-Loup
            </p>
          </div>

          <div class="contact__info-block">
            <p class="contact__info-label">Zone d'intervention</p>
            <p class="contact__info-text">Alpes-Maritimes (06) — Nice, Antibes, Cannes, Vence, Cagnes-sur-Mer, Saint-Paul-de-Vence et alentours.</p>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding-block: var(--space-24);
  background-color: var(--bg-alt);
  color: var(--text);
}

/* ── En-tête ── */
.contact__header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.contact__eyebrow {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-red);
  margin-bottom: var(--space-3);
  max-width: none;
}

.contact__title {
  font-family: var(--font-display);
  font-size: clamp(var(--text-3xl), 4vw, var(--text-5xl));
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-black);
  margin-bottom: var(--space-4);
}

.contact__intro {
  color: var(--color-grey-mid);
  font-size: var(--text-lg);
  max-width: 55ch;
  margin-inline: auto;
}

/* ── Layout ── */
.contact__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
}

@media (min-width: 1024px) {
  .contact__layout {
    grid-template-columns: 1fr 360px;
    gap: var(--space-16);
    align-items: start;
  }
}

/* ── Formulaire ── */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.contact__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);
}

@media (min-width: 640px) {
  .contact__row {
    grid-template-columns: 1fr 1fr;
  }
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.contact__label {
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-grey-dark);
  text-transform: uppercase;
}

.contact__input {
  padding: var(--space-4);
  background-color: var(--color-white);
  border: 1px solid var(--color-grey);
  color: var(--color-black);
  font-size: var(--text-base);
  font-family: var(--font-body);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
  appearance: none;
}

.contact__input::placeholder {
  color: var(--color-grey-mid);
}

.contact__input:focus {
  outline: none;
  border-color: var(--color-red);
  box-shadow: 0 0 0 3px rgba(227, 6, 19, 0.08);
}

.contact__select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A8A8A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-4) center;
  padding-right: var(--space-10);
}

.contact__select option {
  background-color: var(--color-white);
  color: var(--color-black);
}

.contact__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact__submit {
  padding: var(--space-4) var(--space-8);
  background-color: var(--color-red);
  color: var(--color-white);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-base);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 2px solid var(--color-red);
  cursor: pointer;
  transition: background-color var(--transition-base);
  align-self: flex-start;
}

.contact__submit:hover:not(:disabled) {
  background-color: var(--color-red-dark);
  border-color: var(--color-red-dark);
}

.contact__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ── Succès ── */
.contact__success {
  text-align: center;
  padding: var(--space-16);
  border: 1px solid var(--color-grey);
  background-color: var(--color-white);
}

.contact__success-icon {
  width: 56px;
  height: 56px;
  background-color: var(--color-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-2xl);
  margin: 0 auto var(--space-6);
}

.contact__success-title {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--color-black);
  margin-bottom: var(--space-3);
}

/* ── Infos ── */
.contact__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.contact__info-block {
  border-left: 3px solid var(--color-red);
  padding-left: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.contact__info-label {
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-red);
  max-width: none;
}

.contact__info-link {
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-black);
  transition: color var(--transition-fast);
}

.contact__info-link:hover {
  color: var(--color-red);
}

.contact__info-text {
  font-size: var(--text-base);
  color: var(--color-grey-mid);
  line-height: 1.7;
  max-width: none;
}
</style>
