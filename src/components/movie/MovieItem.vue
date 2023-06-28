<script setup>
import { computed } from "vue";
/*
These are Icons that you can use, of course you can use other ones if you prefer.
*/
import {
  StarIcon,
  TrashIcon,
  PencilIcon,
  EyeIcon,
} from "@heroicons/vue/24/solid";

import MovieStarRating from "@/components/movie/MovieStarRating.vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["edit", "remove", "update:rating"]);

const notRated = computed(() => {
  return Boolean(!props.movie?.rating);
});

function updateRating(rating) {
  emit("update:rating", props.movie.id, rating);
}

function editMovie() {
  emit("edit", props.movie.id);
}

function removeMovie() {
  emit("remove", props.movie.id);
}
</script>

<template>
  <div class="movie-item group">
    <div class="movie-item-image-wrapper">
      <MovieStarRating :rating="movie.rating" />

      <img
        v-if="movie?.image"
        :src="movie.image"
        class="movie-item-image"
        :alt="movie.name"
      />

      <span v-else class="movie-item-no-image">
        <span class="text-4xl text-white">No image</span>
      </span>
    </div>

    <div class="movie-item-content-wrapper">
      <div class="movie-item-title-wrapper">
        <h3 class="movie-item-title">{{ movie.name }}</h3>
        <div class="movie-item-genres-wrapper">
          <span
            v-for="genre in movie.genres"
            :key="`${movie.id}-${genre}`"
            class="movie-item-genre-tag"
          >
            {{ genre }}
          </span>
        </div>
      </div>

      <div class="movie-item-description-wrapper">
        <p class="movie-item-description">{{ movie.description }}</p>
      </div>

      <div class="movie-item-rating-wrapper">
        <span class="movie-item-rating-text">
          Rating: ({{ movie.rating }}/5)
        </span>

        <div class="movie-item-star-icon-wrapper">
          <button
            v-for="star in 5"
            :key="star"
            class="movie-item-star-icon-button"
            :class="[
              star <= movie.rating ? 'text-yellow-500' : 'text-gray-500',
            ]"
            :disabled="star === movie.rating"
            @click="updateRating(star)"
          >
            <StarIcon class="movie-item-star-icon" />
          </button>
        </div>

        <div class="movie-item-actions-list-wrapper">
          <button class="movie-item-action-edit-button" @click="editMovie">
            <PencilIcon class="w-4 h-4" />
          </button>

          <button class="movie-item-action-remove-button" @click="removeMovie">
            <TrashIcon class="w-4 h-4" />
          </button>

          <router-link
            class="movie-item-action-remove-button"
            :to="{ name: 'movie', params: { id: movie.id } }"
          >
            <EyeIcon class="w-4 h-4" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
