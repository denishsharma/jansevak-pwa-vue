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

                                <button :disabled="isProcessing" class="disabled:bg-gray-50 disabled:text-gray-300 absolute z-10 right-0 bottom-0 h-9 w-9 mr-0.5 mb-0.5 inline-flex flex-shrink-0 justify-center items-center gap-2 shadow-[0_2px_10px_0_rgba(0,0,0,0.08)] rounded-full border border-gray-100 bg-white text-gray-600 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button" @click="openUploadProfileImageSheet">
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
                                    <input :disabled="isProcessing" :value="formData.firstName" class="disabled:bg-gray-50 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="firstname" placeholder="e.g. Denish" type="text" @input="e => setFormTextInputData(e, 'firstName')">
                                </label>
                            </div>

                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Last Name
                                </div>
                                <label class="relative">
                                    <input :disabled="isProcessing" :value="formData.lastName" class="disabled:bg-gray-50 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" name="lastname" placeholder="e.g. Sharma" type="text" @input="e => setFormTextInputData(e, 'lastName')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Mobile Number
                                </div>
                                <label class="relative">
                                    <input :value="userData && userData.phone_number" class="py-3 px-4 pl-12 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500 read-only:bg-gray-50 disabled:bg-gray-50" disabled name="mobile_number" placeholder="Enter your phone number" readonly type="text">
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
                                    <label :data-disabled="isProcessing" class="data-[disabled=true]:bg-gray-50 select-none flex px-4 py-3 block w-full bg-white border border-gray-200/[0.7] rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500">
                                        <input :checked="'male' === formData.gender" :disabled="isProcessing" class="disabled:bg-gray-50 shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-500 pointer-events-none focus:ring-orange-500" name="gender" type="radio" value="male" @input="e => setFormTextInputData(e, 'gender')">
                                        <span class="text-sm font-medium ml-3.5">Male</span>
                                    </label>

                                    <label :data-disabled="isProcessing" class="data-[disabled=true]:bg-gray-50 select-none flex px-4 py-3 block w-full bg-white border border-gray-200/[0.7] rounded-lg text-sm focus:border-orange-500 focus:ring-orange-500">
                                        <input :checked="'female' === formData.gender" :disabled="isProcessing" class="disabled:bg-gray-50 shrink-0 mt-0.5 border-gray-200 rounded-full text-orange-500 pointer-events-none focus:ring-orange-500" name="gender" type="radio" value="female" @input="e => setFormTextInputData(e, 'gender')">
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
                                    <input :disabled="isProcessing" :value="formData.email" class="disabled:bg-gray-50 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="Enter your email address" type="text" @input="e => setFormTextInputData(e, 'email')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    House Number & Building Name
                                </div>
                                <label class="relative">
                                    <input :disabled="isProcessing" :value="formData.addressLineOne" class="disabled:bg-gray-50 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="e.g. G-1, Sandhya Building, Dharmajaya CHS" type="text" @input="e => setFormTextInputData(e, 'addressLineOne')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Street Name
                                </div>
                                <label class="relative">
                                    <input :disabled="isProcessing" :value="formData.addressLineTwo" class="disabled:bg-gray-50 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" placeholder="e.g. P.K Road, Mulund West" type="text" @input="e => setFormTextInputData(e, 'addressLineTwo')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Postal Code
                                </div>
                                <label class="relative">
                                    <button :disabled="isProcessing" class="group disabled:bg-gray-50 select-none text-left flex justify-between items-center py-3 px-4 block w-full border border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" @click="openSelectPostOfficeSelectorSheet">
                                        <div class="grow">
                                            <div v-if="formData.postOffice === null" class="font-normal text-gray-300">
                                                Select post office
                                            </div>
                                            <div v-else class="font-medium">
                                                {{ formData.postOffice["code"] }} - {{ formData.postOffice["name"] }}
                                            </div>
                                        </div>
                                        <div class="group-disabled:bg-gray-200 group-disabled:text-gray-400 shrink-0 text-xxs font-medium bg-orange-100 text-orange-500 px-2 rounded-md -mr-1.5 uppercase">
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
                                    <button :disabled="isProcessing" class="group disabled:bg-gray-50 select-none text-left flex justify-between items-center py-3 px-4 block w-full border border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" @click="openSelectWardSelectorSheet">
                                        <div class="grow">
                                            <div v-if="formData.ward === null" class="font-normal text-gray-300">
                                                Select ward
                                            </div>
                                            <div v-else class="font-medium">{{ formData.ward["name"] }}</div>
                                        </div>
                                        <div class="group-disabled:bg-gray-200 group-disabled:text-gray-400 shrink-0 text-xxs font-medium bg-orange-100 text-orange-500 px-2 rounded-md -mr-1.5 uppercase">
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
                                    <input v-maska :disabled="isProcessing" :value="formData.aadharNumber" class="disabled:bg-gray-50 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500" data-maska="#### #### ####" placeholder="e.g. 0000 0000 0000" type="text" @input="e => setFormTextInputData(e, 'aadharNumber')">
                                </label>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5">
                                    Voter ID Number
                                </div>
                                <label class="relative">
                                    <input v-maska :disabled="isProcessing" :value="formData.voterIdNumber" class="disabled:bg-gray-50 py-3 px-4 block w-full border-gray-200/[0.7] rounded-lg text-sm uppercase focus:z-10 focus:border-orange-500 focus:ring-orange-500" data-maska="@@@#######" placeholder="e.g. ABC1234567" type="text" @input="e => setFormTextInputData(e, 'voterIdNumber')">
                                </label>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <AppComponentBase v-if="!isEditProfile" class="mt-8">
                    <div class="select-none flex flex-col gap-1">
                        <div class="font-semibold text-sm leading-tight mr-10">
                            My Jansevak
                        </div>
                        <div class="text-gray-500 leading-tight text-xs mr-10">
                            Select and view the details of the Jansevak before allocating to them.
                        </div>
                    </div>

                    <div class="flex flex-col gap-5 mt-4 mb-2">
                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">
                                <div class="block text-xs text-gray-400 font-medium mb-1.5 after:content-['*'] after:ml-px after:text-red-400">
                                    Allocate Jansevak
                                </div>
                                <label class="relative">
                                    <button :disabled="isProcessing || validationErrors?.ward?.length" class="group disabled:bg-gray-50 transition-all select-none text-left flex justify-between items-center py-3 px-4 block w-full border border-gray-200/[0.7] rounded-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" @click="openSelectJansevakSelectorSheet">
                                        <div class="grow">
                                            <transition mode="out-in" name="fade">
                                                <div v-if="formData.jansevak === null" class="font-normal text-gray-300">
                                                    Select jansevak
                                                </div>
                                                <div v-else class="relative flex items-center font-medium whitespace-nowrap text-ellipsis pr-3">
                                                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-[1]">
                                                        <div class="h-[1.375rem] w-[1.375rem]">
                                                            <img :src="formData.jansevak.avatar_url" alt="" class="w-full h-full shadow-[0_0_0_1px] shadow-gray-200 bg-white object-cover object-center rounded-full">
                                                        </div>
                                                    </div>

                                                    <div class="pl-8 overflow-hidden grow whitespace-nowrap text-ellipsis">
                                                        {{ formData.jansevak["full_name"] }}
                                                    </div>
                                                </div>
                                            </transition>
                                        </div>
                                        <div class="group-disabled:bg-gray-200 group-disabled:text-gray-400 transition-all shrink-0 text-xxs font-medium bg-orange-100 text-orange-500 px-2 rounded-md -mr-1.5 uppercase">
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
                    </div>
                </AppComponentBase>

                <UploadProfileImageSheet ref="refUploadProfileImageSheet" @on-close="onUploadProfileImageSheetClose" @on-image-selected="onProfileImageSelected" />
                <SelectWardSelectorSheet ref="refSelectWardSelectorSheet" @on-close="onSelectWardSelectorSheetClose" @on-ward-selected="onWardSelected" />
                <SelectPostOfficeSelectorSheet ref="refSelectPostOfficeSelectorSheet" @on-close="onSelectPostOfficeSelectorSheetClose" @on-post-office-selected="onPostOfficeSelected" />
                <SelectJansevakSelectorSheet ref="refSelectJansevakSelectorSheet" @on-close="onSelectJansevakSelectorSheetClose" @on-jansevak-selected="onJansevakUserSelected" />
            </template>

            <template #footer>
                <button :disabled="!validationPass || isProcessing" class="disabled:bg-gray-50 disabled:text-gray-300 py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-orange-500 text-white active:bg-orange-700 focus:outline-none transition-all" type="button" @click="handleSubmit">
                    <div v-show="isProcessing" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
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
import { nextTick, reactive, ref } from "vue";
import router from "@/router";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import UploadProfileImageSheet from "@/sheets/upload-profile-image/UploadProfileImageSheet.vue";
import { set, syncRef, useImage } from "@vueuse/core";
import SelectWardSelectorSheet from "@/sheets/selector/select-ward/SelectWardSelectorSheet.vue";
import { executeAfter } from "@/helpers/general";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import SelectPostOfficeSelectorSheet from "@/sheets/selector/select-post-office/SelectPostOfficeSelectorSheet.vue";
import type { Rules } from "async-validator";
import { useAsyncValidator } from "@vueuse/integrations/useAsyncValidator";
import SelectJansevakSelectorSheet from "@/sheets/selector/select-jansevak/SelectJansevakSelectorSheet.vue";
import ProfileService from "@/services/profile.service";
import AuthService from "@/services/auth.service";

const props = defineProps({
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
const refSelectJansevakSelectorSheet = ref<InstanceType<typeof SelectJansevakSelectorSheet> | null>(null);

const refProfileImage = ref<HTMLImageElement | null>(null);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
const userData = ref();

const isProcessing = ref(false);

const _formDataInterface: {
    avatar: File | null;
    firstName: string;
    lastName: string;
    email: string;
    gender: "male" | "female" | "other";
    addressLineOne: string;
    addressLineTwo: string;
    postOffice: { name: string, code: string, district: string, state: string } | null;
    ward: { name: string, code: string } | null;
    aadharNumber: string;
    voterIdNumber: string;
    jansevak: { full_name: string, avatar_url: string, id: string } | null
} = {
    avatar: null,
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    addressLineOne: "",
    addressLineTwo: "",
    postOffice: null,
    ward: null,
    aadharNumber: "",
    voterIdNumber: "",
    jansevak: null,
};

const formData = reactive(_formDataInterface);

const formValidationRules: Rules = {
    avatar: { required: true },
    firstName: { required: true, type: "string", min: 3, max: 50 },
    lastName: { required: true, type: "string", min: 3, max: 50 },
    email: { type: "email" },
    gender: { required: true, type: "string", enum: ["male", "female", "other"] },
    addressLineOne: { required: true, type: "string", min: 3, max: 50 },
    addressLineTwo: { required: true, type: "string", min: 3, max: 50 },
    postOffice: { required: true },
    ward: { required: true },
    jansevak: { required: true },
};

const { pass: validationPass, errorFields: validationErrors } = useAsyncValidator(formData, formValidationRules);

const setFormData = (data: any, field: keyof typeof formData) => {
    formData[field] = data;
};

const setFormTextInputData = (e: Event, key: string) => {
    const target = e.target as HTMLInputElement;
    setFormData(target.value, key as keyof typeof formData);
};

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
    formData.ward = ward;
    formData.jansevak = null;
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
    formData.postOffice = postOffice;
};

const onProfileImageSelected = ({ uri, file }) => {
    profileImageSrc.value = { src: uri };
    formData.avatar = file as File;
    refProfileImage?.value?.addEventListener("load", () => {
        if (!refProfileImage?.value) return;
        URL.revokeObjectURL(refProfileImage?.value?.src);
    });
};

const openSelectJansevakSelectorSheet = () => {
    executeAfter(() => {
        refSelectJansevakSelectorSheet.value?.openModal(userData.value.id, formData.jansevak?.id, formData.ward?.code, true);
        refModalPage.value?.suspend();
    });
};

const onSelectJansevakSelectorSheetClose = () => {
    refModalPage.value?.resume();
};

const onJansevakUserSelected = (user: { full_name: string, avatar_url: string, type: "my" | "ward", from: string, id: string }) => {
    formData.jansevak = {
        full_name: user.full_name,
        avatar_url: user.avatar_url,
        id: user.id,
    };
};

const openModal = (data?: any) => {
    refModalPage.value?.openModal();
    if (data) set(userData, data);
    nextTick(() => {
        set(userData, user.value.data);
        console.log(userData.value);
    });
    (document.activeElement as HTMLElement)?.blur();
};

const profileImageSrc = ref({ src: "https://api.dicebear.com/5.x/thumbs/svg?seed=Denish" });
const { isLoading } = useImage(profileImageSrc);

const handleSetupOnSuccess = () => {
    const authStore = useAuthStore();
    const { setUserData, setIsProfileCompleted } = authStore;
    const { execute } = AuthService.me((data) => {
        setUserData(data);
        setIsProfileCompleted(data.is_setup_completed);

        if (data.is_setup_completed) {
            refModalPage.value?.closeModal();

            executeAfter(() => {
                resetForm();
            }, 100);
        }
    });
    execute();
};

const handleSetupComplete = (data) => {
    executeAfter(() => {
        const { isLoading, execute } = ProfileService.setup(data, handleSetupOnSuccess, (data) => {
            console.log(data);
        });
        syncRef(isLoading, isProcessing, { direction: "ltr" });
        execute();
    }, 100);
};

const handleSubmit = () => {
    const requestData = new FormData();
    requestData.append("profile", JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        gender: formData.gender,
        aadhar_umber: formData.aadharNumber,
        voter_id_number: formData.voterIdNumber,
        address: {
            address_line_1: formData.addressLineOne,
            address_line_2: formData.addressLineTwo,
            district: formData.postOffice?.district,
            state: formData.postOffice?.state,
            city: formData.postOffice?.district,
            pincode: formData.postOffice?.code,
        },
    }));
    requestData.append("user", JSON.stringify({
        ward: formData.ward?.code,
        jansevak: formData.jansevak?.id,
    }));
    requestData.append("avatar", formData.avatar as File);

    if (!props.isEditProfile) {
        handleSetupComplete(requestData);
    }
};

const resetForm = () => {
    formData.avatar = null;
    formData.firstName = "";
    formData.lastName = "";
    formData.email = "";
    formData.gender = "male";
    formData.addressLineOne = "";
    formData.addressLineTwo = "";
    formData.postOffice = null;
    formData.ward = null;
    formData.aadharNumber = "";
    formData.voterIdNumber = "";
    formData.jansevak = null;
};

defineExpose({
    openModal,
    closeModal: () => refModalPage.value?.closeModal(),
    goBack: () => refModalPage.value?.goBack(),
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style scoped>

</style>