<template>
    <div style="width: 1438px; height: 7523px; position: relative; background: white">
        <div style="width: 259px; height: 245px; left: 590px; top: 58px; position: absolute; background: #d9d9d9"></div>
        <div style="width: 151px; height: 155px; left: 643px; top: 103px; position: absolute; justify-content: center; align-items: center; display: inline-flex">
            <div style="width: 100px; height: 100px; padding-left: 18px; padding-right: 18px; padding-top: 11px; padding-bottom: 11px; background: #2b2e4a; border-radius: 999px; overflow: hidden; justify-content: center; align-items: center; gap: 8px; display: flex" @click="handleButtonClick">
                <div style="width: 70px; height: 70px; text-align: center; color: white; font-size: 64px; font-family: Lato; font-weight: 700; line-height: 64px; word-wrap: break-word">+</div>
            </div>
            <img
                v-if="selectedImage"
                :src="selectedImage"
                alt="Selected Image"
                style="width: 100px; height: 100px; position: absolute; top: 0; left: 0; cursor: pointer"
                @click="handleImageClick"
            />

            <div
                v-if="showImageMenu"
                style="position: absolute; top: 120px; left: 0; display: flex; gap: 8px; cursor: pointer"
            >
                <img
                    v-for="(image, index) in imageList"
                    :key="index"
                    :src="image"
                    alt="Image in Menu"
                    style="width: 40px; height: 40px; border-radius: 4px;"
                    @click="selectImage(image)"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showImageMenu = ref(false);
const selectedImage = ref(null);

const imageList = [
    "./images/1-front.webp",
    "./images/2-front.webp",
];

onMounted(() => {
    console.log("Running App");
});

const handleButtonClick = () => {
    showImageMenu.value = !showImageMenu.value;
};

const selectImage = (image) => {
    selectedImage.value = image;
    showImageMenu.value = false;
};

const handleImageClick = () => {
    console.log("Image clicked");
};
</script>

<style>
</style>
