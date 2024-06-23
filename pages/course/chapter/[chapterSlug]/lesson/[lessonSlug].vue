<template>
	<div>
		<p class="mt-0 uppercase font-bold text-slate-400 mb-1">
			Lesson {{ chapter?.number }} - {{ lesson?.number }}
		</p>
		<h2 class="my-0">{{ lesson?.title }}</h2>
		<div class="flex space-x-4 mt-2 mb-8">
			<NuxtLink
				v-if="lesson?.sourceUrl"
				class="font-normal text-md text-gray-500"
				:to="lesson.sourceUrl"
			>
				Download Source Code
			</NuxtLink>
			<NuxtLink
				v-if="lesson?.downloadUrl"
				class="font-normal text-md text-gray-500"
				:to="lesson.downloadUrl"
			>
				Download Video
			</NuxtLink>
		</div>
		<VideoPlayer v-if="lesson?.videoId" :videoId="lesson.videoId" />
		<p>{{ lesson?.text }}</p>
		<LessonCompleteButton
			:model-value="isLessonComplete"
			@update:model-value="toggleComplete"
		/>
	</div>
</template>

<script setup lang="ts">
const course = useCourse()
const route = useRoute()

const chapter = computed(() => {
	return course.chapters.find(
		chapter => chapter.slug === route.params.chapterSlug,
	)
})

const lesson = computed(() => {
	return chapter.value?.lessons.find(
		lesson => lesson.slug === route.params.lessonSlug,
	)
})
const title = computed(() => {
	return `${lesson.value?.title} - ${course.title}`
})
useHead({
	title: title,
})

const progress = useLocalStorage<boolean[][]>('progress', () => [])

const isLessonComplete = computed(() => {
	// Safely access array indices by checking for existence first
	const chapterIndex = chapter.value?.number ? chapter.value.number - 1 : -1
	const lessonIndex = lesson.value?.number ? lesson.value.number - 1 : -1

	// Early return if indexes are not valid
	if (chapterIndex < 0 || lessonIndex < 0) return false

	// Use optional chaining to safely access nested properties
	return progress.value[chapterIndex]?.[lessonIndex] ?? false
})

const toggleComplete = () => {
	const chapterIndex = chapter.value?.number ? chapter.value.number - 1 : -1
	const lessonIndex = lesson.value?.number ? lesson.value.number - 1 : -1

	// Early return if indexes are not valid
	if (chapterIndex < 0 || lessonIndex < 0) return

	// Initialize the array at chapterIndex if it does not exist
	if (!progress.value[chapterIndex]) {
		progress.value[chapterIndex] = []
	}

	// Toggle the completion status
	progress.value[chapterIndex][lessonIndex] = !isLessonComplete.value
}
</script>
