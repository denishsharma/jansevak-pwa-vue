<template>
    <ModalPage id="edit-profile-details" ref="refModalPage">
        <AppContainerBase>
            <template #title>{{ title }}</template>

            <template #header>
                <div class="flex items-center">
                    <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none transition-all" type="button" @click="router.back()">
                        <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </template>

            <template #body>
                <PageHeading :emphasis="headingRight" :title="headingLeft" class="mb-6">
                    <template #subtitle>
                        {{ subtitle }}
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <div class="flex flex-col gap-5">
                        <div class="flex justify-center items-center">
                            <div class="h-[8rem] w-[8rem] relative">
                                <div v-if="isLoading" class="rounded-full h-full w-full object-cover object-center overflow-hidden bg-gray-100 animate-pulse transition-all"></div>
                                <img v-else ref="refProfileImage" :src="profileImageSrc.src" alt="" class="rounded-full h-full w-full object-cover object-center overflow-hidden">

                                <button class="absolute z-10 right-0 bottom-0 h-9 w-9 mr-0.5 mb-0.5 inline-flex flex-shrink-0 justify-center items-center gap-2 shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button" @click="openUploadProfileImageSheet">
                                    <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                        <path d="M14.0298 10.0835C14.5954 10.0835 14.8796 9.40148 14.4817 8.99998L11.6538 6.14542C11.2935 5.78242 10.7068 5.78242 10.3466 6.14542L7.51861 8.99998C7.12076 9.40148 7.40585 10.0835 7.97053 10.0835H14.0298Z" fill="currentColor" />
                                        <path d="M10.0835 9.16687C10.0835 9.16687 10.0835 15.2646 10.0835 15.5837C10.0835 16.0897 10.4942 16.5003 11.0002 16.5003C11.5062 16.5003 11.9169 16.0897 11.9169 15.5837C11.9169 15.2646 11.9169 9.16687 11.9169 9.16687H10.0835Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-x-3 mt-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    First Name
                                </div>
                                <label class="relative">
                                    <input :value="formData.firstName" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="firstname" placeholder="e.g. Denish" type="text" @input="e => setFormData(e, 'firstName')">
                                </label>
                            </div>

                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Last Name
                                </div>
                                <label class="relative">
                                    <input :value="formData.lastName" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="lastname" placeholder="e.g. Sharma" type="text" @input="e => setFormData(e, 'lastName')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Mobile Number
                                </div>
                                <label class="relative">
                                    <input :value="userData.phone_number" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500 read-only:bg-gray-50 disabled:bg-gray-50" disabled name="mobile_number" placeholder="Enter your phone number" readonly type="text">
                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1] pl-3.5">
                                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.56262 18.7347H2.83598C1.64942 18.7347 0.6875 17.7727 0.6875 16.5862V5.4141C0.6875 4.22754 1.64942 3.26562 2.83598 3.26562H7.56262V18.7347Z" fill="#FF9E1C" />
                                            <path d="M14.4377 3.26562H7.56262V18.7347H14.4377V3.26562Z" fill="white" />
                                            <path d="M19.1644 18.7347H14.4377V3.26562H19.1644C20.351 3.26562 21.3129 4.22754 21.3129 5.4141V16.5862C21.3129 17.7727 20.351 18.7347 19.1644 18.7347Z" fill="#6DA544" />
                                            <path d="M11.0002 8.422C9.57629 8.422 8.422 9.57629 8.422 11.0002C8.422 12.424 9.57629 13.5783 11.0002 13.5783C12.424 13.5783 13.5783 12.424 13.5783 11.0002C13.5783 9.57629 12.424 8.422 11.0002 8.422ZM11.0002 12.7189C10.0509 12.7189 9.28139 11.9494 9.28139 11.0002C9.28139 10.0509 10.0509 9.28139 11.0002 9.28139C11.9494 9.28139 12.7189 10.0509 12.7189 11.0002C12.7189 11.9494 11.9494 12.7189 11.0002 12.7189Z" fill="#0053B5" />
                                            <path d="M11.0001 9.78479L11.2327 10.4387L11.8595 10.1407L11.5616 10.7676L12.2155 11.0001L11.5616 11.2327L11.8595 11.8595L11.2327 11.5616L11.0001 12.2155L10.7676 11.5616L10.1407 11.8595L10.4387 11.2327L9.78479 11.0001L10.4387 10.7676L10.1407 10.1407L10.7676 10.4387L11.0001 9.78479Z" fill="#0053B5" />
                                        </svg>
                                    </div>
                                </label>
                                <div class="block text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                    You can't change your mobile number. It is used to verify your identity.
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Gender
                                </div>
                                <div class="grid grid-cols-2 gap-2">
                                    <label class="select-none flex px-4 py-3 block w-full bg-white border border-gray-200/[0.7] rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500">
                                        <input :checked="'male' === formData.gender" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-500 pointer-events-none focus:ring-orange-500" name="gender" type="radio" value="male" @input="e => setFormData(e, 'gender')">
                                        <span class="text-sm font-medium ml-3.5">Male</span>
                                    </label>

                                    <label class="select-none flex px-4 py-3 block w-full bg-white border border-gray-200/[0.7] rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500">
                                        <input :checked="'female' === formData.gender" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-500 pointer-events-none focus:ring-orange-500" name="gender" type="radio" value="female" @input="e => setFormData(e, 'gender')">
                                        <span class="text-sm font-medium ml-3.5">Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                    Email Address
                                </div>
                                <label class="relative">
                                    <input :value="formData.email" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="Enter your email address" type="text" @input="e => setFormData(e, 'email')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    House Number & Building Name
                                </div>
                                <label class="relative">
                                    <input :value="formData.addressLineOne" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="e.g. G-1, Sandhya Building, Dharmajaya CHS" type="text" @input="e => setFormData(e, 'addressLineOne')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Street Name
                                </div>
                                <label class="relative">
                                    <input :value="formData.addressLineTwo" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="e.g. P.K Road, Mulund West" type="text" @input="e => setFormData(e, 'addressLineTwo')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Postal Code
                                </div>
                                <label class="relative">
                                    <button class="select-none text-left flex justify-between items-center py-3 px-4 block w-full border border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" @click="openSelectPostOfficeSelectorSheet">
                                        <div class="grow">
                                            <div v-if="selectedPostOffice === null" class="font-normal text-gray-300">
                                                Select post office
                                            </div>
                                            <div v-else class="font-medium">
                                                {{ selectedPostOffice.code }} - {{ selectedPostOffice.name }}
                                            </div>
                                        </div>
                                        <div class="shrink-0 text-xxs font-medium bg-orange-100 text-orange-500 px-2 rounded-md -mr-1.5 uppercase">
                                            Select
                                        </div>
                                    </button>
                                </label>
                                <div class="block text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                    Your city and state will be automatically added to your address using your postal
                                    code.
                                </div>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <AppComponentBase class="mt-8">
                    <div class="select-none flex flex-col gap-1">
                        <div class="font-semibold text-sm leading-tight mr-10">
                            Electoral Information
                        </div>
                        <div class="text-gray-500 leading-tight text-xs mr-10">
                            We need this information to verify your identity and to ensure that you are eligible to
                            vote.
                        </div>
                    </div>

                    <div class="flex flex-col gap-5 mt-4">
                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Ward Code
                                </div>
                                <label class="relative">
                                    <button class="select-none text-left flex justify-between items-center py-3 px-4 block w-full border border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" @click="openSelectWardSelectorSheet">
                                        <div class="grow">
                                            <div v-if="selectedWard === null" class="font-normal text-gray-300">
                                                Select ward
                                            </div>
                                            <div v-else class="font-medium">{{ selectedWard.name }}</div>
                                        </div>
                                        <div class="shrink-0 text-xxs font-medium bg-orange-100 text-orange-500 px-2 rounded-md -mr-1.5 uppercase">
                                            Select
                                        </div>
                                    </button>
                                </label>
                                <div class="block text-xxs leading-tight text-gray-300 font-medium mt-1.5">
                                    You can find your ward code on your voter ID card. Ward code will be used to assign
                                    Jansevak for you.
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                    Aadhar Number
                                </div>
                                <label class="relative">
                                    <input v-maska :value="formData.aadharNumber" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" data-maska="#### #### ####" placeholder="e.g. 0000 0000 0000" type="text" @input="e => setFormData(e, 'aadharNumber')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                    Voter ID Number
                                </div>
                                <label class="relative">
                                    <input v-maska :value="formData.voterIdNumber" class="py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm uppercase focus:z-10 focus:border-orange-500 focus:ring-orange-500" data-maska="@@@#######" placeholder="e.g. ABC1234567" type="text" @input="e => setFormData(e, 'voterIdNumber')">
                                </label>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <UploadProfileImageSheet ref="refUploadProfileImageSheet" @on-close="onUploadProfileImageSheetClose" @on-image-selected="onProfileImageSelected" />
                <SelectWardSelectorSheet ref="refSelectWardSelectorSheet" @on-close="onSelectWardSelectorSheetClose" @on-ward-selected="onWardSelected" />
                <SelectPostOfficeSelectorSheet ref="refSelectPostOfficeSelectorSheet" @on-close="onSelectPostOfficeSelectorSheetClose" @on-post-office-selected="onPostOfficeSelected" />
            </template>

            <template #footer>
                <button class="py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all" type="button" @click="handleSubmit">
                    {{ isEditProfile ? "Save Changes" : "Complete Profile" }}
                </button>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import { vMaska } from "maska";
import ModalPage from "@/components/modal-page/ModalPage.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import { reactive, ref } from "vue";
import router from "@/router";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import UploadProfileImageSheet from "@/sheets/upload-profile-image/UploadProfileImageSheet.vue";
import { set, useImage } from "@vueuse/core";
import SelectWardSelectorSheet from "@/sheets/selector/select-ward/SelectWardSelectorSheet.vue";
import { executeAfter } from "@/helpers/general";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import SelectPostOfficeSelectorSheet from "@/sheets/selector/select-post-office/SelectPostOfficeSelectorSheet.vue";

defineProps({
    title: {
        type: String,
        default: "Edit Profile",
    },
    headingLeft: {
        type: String,
        default: "Edit your",
    },
    headingRight: {
        type: String,
        default: "Profile",
    },
    subtitle: {
        type: String,
        default: "You can make minor changes to your profile here. For major changes, please contact support.",
    },
    isEditProfile: {
        type: Boolean,
        default: true,
    },
});

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);

const refUploadProfileImageSheet = ref<InstanceType<typeof UploadProfileImageSheet> | null>(null);
const refSelectWardSelectorSheet = ref<InstanceType<typeof SelectWardSelectorSheet> | null>(null);
const refSelectPostOfficeSelectorSheet = ref<InstanceType<typeof SelectPostOfficeSelectorSheet> | null>(null);

const refProfileImage = ref<HTMLImageElement | null>(null);
const profileImageFile = ref<File | null>(null);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const userData = ref(user.value.data);

/* Profile Data */
const formData = reactive({
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    addressLineOne: "",
    addressLineTwo: "",
    district: "",
    state: "",
    postalCode: "",
    postOffice: "",
    wardCode: "",
    aadharNumber: "",
    voterIdNumber: "",
});
const setFormData = (e: Event, field: keyof typeof formData) => {
    formData[field] = (e.target as HTMLInputElement).value;
};

const selectedWard = ref<{ name: string, code: string } | null>(null);
const selectedPostOffice = ref<{ name: string, code: string, district: string, state: string } | null>(null);

const openUploadProfileImageSheet = () => {
    refUploadProfileImageSheet.value?.openModal();
    refModalPage.value?.suspend();
};

const onUploadProfileImageSheetClose = () => {
    refModalPage.value?.resume();
};

const openSelectWardSelectorSheet = () => {
    executeAfter(() => {
        refSelectWardSelectorSheet.value?.openModal();
        refModalPage.value?.suspend();
    });
};

const onSelectWardSelectorSheetClose = () => {
    refModalPage.value?.resume();
};

const onWardSelected = (ward: { name: string, code: string }) => {
    selectedWard.value = ward;
    formData.wardCode = ward.code;
};

const openSelectPostOfficeSelectorSheet = () => {
    executeAfter(() => {
        refSelectPostOfficeSelectorSheet.value?.openModal();
        refModalPage.value?.suspend();
    });
};

const onSelectPostOfficeSelectorSheetClose = () => {
    refModalPage.value?.resume();
};

const onPostOfficeSelected = (postOffice: { name: string, code: string, district: string, state: string }) => {
    selectedPostOffice.value = postOffice;
    formData.postalCode = postOffice.code;
    formData.postOffice = postOffice.name;
    formData.district = postOffice.district;
    formData.state = postOffice.state;
};

const onProfileImageSelected = ({ uri, file }) => {
    profileImageSrc.value = { src: uri };
    set(profileImageFile, (file as File));
    refProfileImage?.value?.addEventListener("load", () => {
        URL.revokeObjectURL(refProfileImage?.value?.src);
    });
};

const openModal = () => {
    refModalPage.value?.openModal();
    (document.activeElement as HTMLElement)?.blur();
};

const closeModal = () => {
    refModalPage.value?.closeModal();
};

const goBack = () => {
    refModalPage.value?.goBack();
};

const profileImageSrc = ref({ src: "https://api.dicebear.com/5.x/thumbs/svg?seed=Denish" });
const { isLoading } = useImage(profileImageSrc);

const handleSubmit = () => {
    const requestData = new FormData();
    requestData.append("profile", JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        gender: formData.gender,
        aadharNumber: formData.aadharNumber,
        voterIdNumber: formData.voterIdNumber,
    }));
    requestData.append("address", JSON.stringify({
        addressLineOne: formData.addressLineOne,
        addressLineTwo: formData.addressLineTwo,
        district: formData.district,
        state: formData.state,
        postalCode: formData.postalCode,
        postOffice: formData.postOffice,
    }));
    requestData.append("ward", formData.wardCode);
    requestData.append("profileImage", profileImageFile.value || profileImageSrc.value.src);

    for (let pair of requestData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
    }
};

defineExpose({
    openModal,
    closeModal,
    goBack,
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style scoped>

</style>