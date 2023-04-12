<template>
    <ModalPage :id="`profile-summary-${userId}`" ref="refModalPage" :do-on-close="doOnClose">
        <AppContainerBase>
            <template #title>Profile Summary</template>

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
                <PageHeading class="mb-6" emphasis="Summary" title="Profile">
                    <template #subtitle>
                        View the profile summary which includes various information about the user.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <transition mode="out-in" name="fade">
                        <ProfileSummarySkeleton v-if="isFetching" key="skeleton" />
                        <div v-else>
                            <div class="rounded-lg flex justify-center gap-3 mt-2">
                                <div class="grow flex overflow-hidden">
                                    <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                                        <div class="text-sm leading-none font-bold" v-text="profileSummary['stats'].resolved"></div>
                                        <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                            Resolved
                                        </div>
                                    </div>
                                </div>
                                <div class="shrink-0 relative border border-gray-200 aspect-square h-28 w-28 rounded-full">
                                    <img :src="resolveFileUrl(profileSummary['user'].profile.avatar_url)" alt="" class="h-full w-full object-center object-cover rounded-full">

                                    <div v-if="profileSummary['user'].user_type === 'JANSEVAK'" class="absolute h-8 w-8 shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-white border-orange-500 border-[1.5px] bg-orange-500 shadow-[0_0_0_3px_white] rounded-full right-0 bottom-0 flex">
                                        <svg class="mx-auto my-auto h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4019 4.58343C12.7602 4.02425 11.9169 3.66675 11.0002 3.66675C10.0835 3.66675 9.24018 4.02425 8.5985 4.58343H3.66674C2.65381 4.58343 1.83337 5.40386 1.83337 6.4168V7.79182C1.83337 10.0698 3.68049 11.9169 5.95845 11.9169C8.23641 11.9169 10.0835 10.0698 10.0835 7.79182V7.33348C10.0835 6.82931 10.496 6.4168 11.0002 6.4168C11.5044 6.4168 11.9169 6.82931 11.9169 7.33348V7.79182C11.9169 10.0698 13.764 11.9169 16.042 11.9169C18.3199 11.9169 20.167 10.0698 20.167 7.79182V6.4168C20.167 5.40386 19.3466 4.58343 18.3337 4.58343H13.4019Z" fill="currentColor" />
                                            <path d="M18.3337 15.5837C18.3337 15.0777 17.923 14.667 17.417 14.667C16.3106 14.6844 15.2518 14.2801 14.3269 13.6926C13.4918 13.1609 12.3147 12.8336 11.0002 12.8336C9.68569 12.8336 8.50867 13.17 7.67265 13.7017C6.7413 14.2737 5.69079 14.6872 4.58343 14.667C4.07742 14.667 3.66675 15.0777 3.66675 15.5837C3.66675 15.7487 3.72175 15.8953 3.79875 16.0292L3.78225 16.0283C4.7246 17.4436 6.29946 18.3438 8.01183 18.3337C9.09993 18.3337 10.1404 17.9634 11.0002 17.318C11.861 17.9634 12.9014 18.3337 13.9886 18.3337C15.7001 18.3438 17.2749 17.4436 18.2173 16.0283L18.2008 16.0292C18.2787 15.8953 18.3337 15.7487 18.3337 15.5837Z" fill="currentColor" opacity="0.35" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="grow flex overflow-hidden">
                                    <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                                        <div class="text-sm leading-none font-bold" v-text="profileSummary['stats'].pending"></div>
                                        <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                            Pending
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col items-center mt-4 mb-6">
                                <div class="text-xxs leading-tight font-medium text-gray-500">
                                    #{{ profileSummary["user"].fid }}
                                </div>
                                <div class="text-sm font-bold mt-0.5 flex items-center">
                                    <div class="inline" v-text="profileSummary['user'].profile.full_name"></div>
                                    <div v-if="profileSummary['user'].uuid === user['id']" class="inline ml-1.5 leading-none bg-gray-200 py-0.5 px-1 rounded text-xxs font-semibold text-gray-400">
                                        You
                                    </div>
                                </div>
                                <div class="text-xxs font-medium">
                                    +91 {{ profileSummary["user"].phone_number }}
                                </div>
                            </div>

                            <div v-if="['JANSEVAK', 'ADMIN'].includes(profileSummary['user'].user_type)" class="mt-4">
                                <div v-if="profileSummary['user'].uuid !== user['id']" class="mb-4 flex justify-center">
                                    <button class="disabled:text-gray-300 disabled:bg-gray-100 shrink-0 py-2 px-4 pr-[1.2rem] w-fit font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-transparent bg-orange-100 text-orange-500 active:bg-orange-200 focus:outline-none transition-all" @click="openGiveFeedbackModalPage(profileSummary['user'].uuid)">
                                        <div class="grow flex justify-center items-center gap-2">
                                            <svg class="h-4 w-4" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.12503 7.33337H5.95839C6.71741 7.33337 7.33342 7.94939 7.33342 8.7084V17.8752C7.33342 18.6342 6.71741 19.2503 5.95839 19.2503H4.12503C3.36601 19.2503 2.75 18.6342 2.75 17.8752V8.7084C2.75 7.94939 3.36601 7.33337 4.12503 7.33337Z" fill="currentColor" />
                                                <path d="M14.9813 19.2503H9.16674C8.15381 19.2503 7.33337 18.4299 7.33337 17.4169V8.38943C7.33337 7.71016 7.58455 7.05474 8.03922 6.54964L10.2897 4.04985L10.6371 1.95798C10.7939 1.01563 11.9159 0.615035 12.6456 1.23196C13.2368 1.73156 13.7502 2.47315 13.7502 3.54201C13.7502 5.16087 12.8335 7.33341 12.8335 7.33341H17.4169C18.9358 7.33341 20.1669 8.56451 20.1669 10.0835V11.3045C20.1669 11.7078 20.078 12.1066 19.9066 12.4714L17.471 17.6672C17.0181 18.6334 16.0483 19.2503 14.9813 19.2503Z" fill="currentColor" opacity="0.35" />
                                            </svg>
                                            <div class="inline">
                                                Give Feedback
                                            </div>
                                        </div>
                                    </button>
                                </div>

                                <div class="px-2 py-4 flex-col flex border border-gray-200 rounded-lg divide-y divide-gray-200">
                                    <div class="flex justify-evenly items-center space-x-2">
                                        <div class="w-1/3 grow overflow-hidden flex flex-col items-center justify-center">
                                            <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                                                <div class="text-sm leading-none font-bold flex items-center">
                                                    <div class="inline" v-text="profileSummary['stats'].rating"></div>
                                                    <div :class="clsx({ 'bg-green-500': profileSummary['stats'].rating >= 4, 'bg-lime-500': profileSummary['stats'].rating >= 3 && profileSummary['stats'].rating < 4, 'bg-amber-500': profileSummary['stats'].rating >= 2 && profileSummary['stats'].rating < 3, 'bg-red-500': profileSummary['stats'].rating > 0 && profileSummary['stats'].rating < 2, 'bg-gray-300': profileSummary['stats'].rating === 0 })" class="text-white ml-2 py-[3px] px-1 rounded flex">
                                                        <svg class="h-2 w-2" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                            <path clip-rule="evenodd" d="M9.81031 2.5493C10.0441 2.1093 10.5015 1.83337 11.0002 1.83337C11.4988 1.83337 11.9563 2.1093 12.19 2.5493L14.4478 6.8073C14.4735 6.8568 14.5111 6.89897 14.556 6.93197C14.6009 6.96497 14.6531 6.98697 14.7081 6.99614L19.4547 7.82757C19.9461 7.91373 20.3485 8.26391 20.5034 8.73783C20.6574 9.21176 20.5373 9.73244 20.1899 10.0909L16.8385 13.5541C16.8 13.5944 16.7707 13.643 16.7533 13.6953C16.7358 13.7484 16.7313 13.8043 16.7386 13.8603L17.4142 18.6316C17.4839 19.1248 17.2758 19.617 16.8724 19.9104C16.4691 20.2037 15.9374 20.2495 15.4892 20.0305L11.1606 17.9129C11.1111 17.8882 11.0561 17.8753 11.0002 17.8753C10.9442 17.8753 10.8892 17.8882 10.8388 17.912L6.51025 20.0295C6.06199 20.2486 5.53031 20.2019 5.12697 19.9095C4.72363 19.6161 4.51554 19.1248 4.58521 18.6307L5.26081 13.8593C5.26906 13.8043 5.26356 13.7475 5.24614 13.6943C5.22872 13.6412 5.20031 13.5926 5.16089 13.5532L1.80949 10.0899C1.46299 9.73152 1.34198 9.21084 1.49599 8.73692C1.64999 8.26299 2.05333 7.91282 2.54467 7.82665L7.29126 6.99522C7.34626 6.98513 7.39851 6.96313 7.44343 6.93105C7.48835 6.89805 7.52593 6.85588 7.5516 6.80638L9.81031 2.5493Z" fill="currentColor" fill-rule="evenodd" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                                    Rating
                                                </div>
                                            </div>
                                        </div>
                                        <div class="h-4 bg-gray-200 w-px"></div>
                                        <div class="w-1/3 grow overflow-hidden flex flex-col items-center justify-center">
                                            <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                                                <div class="text-sm leading-none font-bold" v-text="profileSummary['stats'].nagarik"></div>
                                                <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                                    Nagarik
                                                </div>
                                            </div>
                                        </div>
                                        <div class="h-4 bg-gray-200 w-px"></div>
                                        <div class="w-1/3 grow overflow-hidden flex flex-col items-center justify-center">
                                            <div class="w-20 gap-1.5 flex flex-col justify-center items-center mx-auto my-auto">
                                                <div class="text-sm leading-none font-bold" v-text="profileSummary['stats'].queries"></div>
                                                <div class="text-xxs uppercase leading-none text-gray-400 font-medium">
                                                    Queries
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="profileSummary['user'].user_type === 'NAGRIK'" class="mt-4 flex flex-col border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
                                <div class="active:bg-gray-100 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 focus:outline-none transition-all" @click="openProfileSummaryModalPage(profileSummary['user'].allocation.allocatedToUser.uuid)">
                                    <div class="flex items-center gap-x-2 w-full">
                                        <img :src="resolveFileUrl(profileSummary['user'].allocation.allocatedToUser.profile.avatar_url)" alt="" class="w-[1.375rem] h-[1.375rem] shrink-0 shadow-[0_0_0_1px] shadow-gray-100 bg-white object-cover object-center rounded-full">
                                        <div class="grow overflow-hidden pr-2text-ellipsis whitespace-nowrap">
                                            {{ profileSummary["user"].allocation.allocatedToUser.profile.full_name }}
                                        </div>
                                        <div class="flex gap-1 shrink-0">
                                            <div class="bg-gray-100 text-gray-500 uppercase text-xxs font-semibold px-2 rounded py-0.5 overflow-hidden whitespace-nowrap text-ellipsis">
                                                {{ user["id"] === userId ? "My Jansevak" : "Their Jansevak" }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-4">
                                <div class="flex-col flex border border-gray-200 rounded-lg divide-y divide-gray-200">
                                    <div class="flex select-none px-2 py-2">
                                        <div v-if="profileSummary['user'].is_verified" class="text-green-500 text-xxs font-medium px-2 py-1 bg-green-100 rounded-md flex gap-1 items-center">
                                            <svg class="h-3.5 w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                                <path d="M10.0835 14.6669C9.8488 14.6669 9.61413 14.5771 9.43537 14.3983L6.68532 11.6483C6.3269 11.2898 6.3269 10.7105 6.68532 10.3521C7.04374 9.99364 7.62309 9.99364 7.98151 10.3521L10.0835 12.454L14.0188 8.5187C14.3772 8.16027 14.9566 8.16027 15.315 8.5187C15.6734 8.87712 15.6734 9.45646 15.315 9.81489L10.7316 14.3983C10.5528 14.5771 10.3181 14.6669 10.0835 14.6669Z" fill="currentColor" />
                                            </svg>
                                            This user and their profile is verified
                                        </div>
                                        <div v-else class="text-red-500 text-xxs font-medium px-2 py-1 bg-red-50 rounded-md flex gap-1 items-center">
                                            <svg class="h-3.5 w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                                <path d="M15.9027 13.4854C16.2822 12.7383 16.5004 11.8958 16.5004 11.0002C16.5004 7.96233 14.0382 5.50012 11.0003 5.50012C10.1047 5.50012 9.26223 5.71829 8.51514 6.0978L15.9027 13.4854Z" fill="currentColor" />
                                                <path d="M6.0978 8.51514C5.71829 9.26223 5.50012 10.1047 5.50012 11.0003C5.50012 14.0382 7.96233 16.5004 11.0002 16.5004C11.8958 16.5004 12.7383 16.2822 13.4854 15.9027L6.0978 8.51514Z" fill="currentColor" />
                                            </svg>
                                            This user is not verified
                                        </div>
                                    </div>

                                    <div v-if="profileSummary['user'].profile.email" class="flex select-none px-2 py-2">
                                        <div class="shrink-0 bg-gray-100/[0.8] text-gray-500 flex justify-center items-center h-9 w-9 rounded-lg">
                                            <div class="h-5 w-5">
                                                <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.83337 15.5836V6.4168C1.83337 4.89785 3.06448 3.66675 4.58342 3.66675H17.417C18.9359 3.66675 20.167 4.89785 20.167 6.4168V15.5836C20.167 17.1026 18.9359 18.3337 17.417 18.3337H4.58342C3.06448 18.3337 1.83337 17.1026 1.83337 15.5836Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M20.167 6.41675C20.167 5.97858 20.0552 5.56974 19.8728 5.20215L12.3679 9.7049C11.5255 10.2109 10.4768 10.2109 9.63343 9.7049L2.12763 5.20215C1.94521 5.56974 1.83337 5.97858 1.83337 6.41675V8.2327L8.21716 12.0635C9.07609 12.5787 10.0377 12.8363 11.0002 12.8363C11.9618 12.8363 12.9252 12.5787 13.7823 12.0635L20.167 8.2327V6.41675Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="grow flex flex-col ml-3 mt-0.5">
                                            <div class="block text-xxs uppercase text-gray-400 font-medium">
                                                Email
                                            </div>
                                            <div class="font-medium pr-4 text-xs" v-text="profileSummary['user'].profile.email"></div>
                                        </div>
                                    </div>

                                    <div class="flex select-none px-2 py-2">
                                        <div class="shrink-0 bg-gray-100/[0.8] text-gray-500 flex justify-center items-center h-9 w-9 rounded-lg">
                                            <div class="h-5 w-5">
                                                <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5003 19.2504H5.50005C3.98111 19.2504 2.75 18.0193 2.75 16.5003V8.03477C2.75 7.03559 3.29176 6.11615 4.16444 5.63123L9.66454 2.57592C10.4951 2.11483 11.5052 2.11483 12.3358 2.57592L17.8359 5.63123C18.7085 6.11615 19.2503 7.0365 19.2503 8.03477V16.5003C19.2503 18.0193 18.0192 19.2504 16.5003 19.2504Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M13.7502 19.2503H8.25012V13.7502C8.25012 12.7373 9.07055 11.9169 10.0835 11.9169H11.9169C12.9298 11.9169 13.7502 12.7373 13.7502 13.7502V19.2503Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="grow flex flex-col ml-3 mt-0.5">
                                            <div class="block text-xxs uppercase text-gray-400 font-medium">
                                                Address
                                            </div>
                                            <div class="font-medium pr-4 text-xs" v-text="profileSummary['user'].profile.address['full_address']"></div>
                                        </div>
                                    </div>

                                    <div class="flex select-none px-2 py-2">
                                        <div class="shrink-0 bg-gray-100/[0.8] text-gray-500 flex justify-center items-center h-9 w-9 rounded-lg">
                                            <div class="h-5 w-5">
                                                <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.66675 9.16684C3.66675 5.11693 6.95031 1.83337 11.0002 1.83337C15.0501 1.83337 18.3337 5.11693 18.3337 9.16684C18.3337 12.433 14.6083 17.0971 12.4678 19.507C11.6877 20.3861 10.3127 20.3861 9.53261 19.507C7.39215 17.0971 3.66675 12.433 3.66675 9.16684Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M9.42079 8.25011C9.73888 7.70468 10.3237 7.33342 11.0002 7.33342C11.6767 7.33342 12.2616 7.70468 12.5797 8.25011H15.492C15.0666 6.15824 13.2177 4.58337 11.0002 4.58337C8.78277 4.58337 6.93382 6.15824 6.5094 8.25011H9.42079Z" fill="currentColor" />
                                                    <path d="M12.5797 10.0835C12.2625 10.6289 11.6777 11.0002 11.0002 11.0002C10.3228 11.0002 9.73888 10.6289 9.42079 10.0835H6.5094C6.93382 12.1754 8.78277 13.7502 11.0002 13.7502C13.2177 13.7502 15.0666 12.1754 15.4911 10.0835H12.5797Z" fill="currentColor" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="grow flex flex-col ml-3 mt-0.5">
                                            <div class="block text-xxs uppercase text-gray-400 font-medium">
                                                Ward
                                            </div>
                                            <div class="font-medium pr-4 text-xs" v-text="profileSummary['user'].allocation.ward.name"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <ProfileSummary ref="refProfileSummaryModalPage" @on-close="onProfileSummaryModalPageClose" />
                    <GiveFeedbackModalPage ref="refGiveFeedbackModalPage" feedback-for="user" subtitle="Give feedback to this user. Your feedback would be used to improve the quality of services provided." @on-close="onGiveFeedbackModalPageClose">
                        <template #feedback>
                            <div class="mb-3 border py-3 px-3.5 gap-3 border-gray-200 border-dashed rounded-lg flex items-center">
                                <div class="rounded-lg flex justify-center gap-3">
                                    <div class="shrink-0 relative border border-gray-200 aspect-square h-20 w-20 rounded-full">
                                        <img :src="resolveFileUrl(profileSummary['user'].profile.avatar_url)" alt="" class="h-full w-full object-center object-cover rounded-full">

                                        <div v-if="profileSummary['user'].user_type === 'JANSEVAK'" class="absolute h-8 w-8 shadow-[0_0_30px_0_rgba(0,0,0,0.1)] text-white border-orange-500 border-[1.5px] bg-orange-500 rounded-full right-0 bottom-0 flex">
                                            <svg class="mx-auto my-auto h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.4019 4.58343C12.7602 4.02425 11.9169 3.66675 11.0002 3.66675C10.0835 3.66675 9.24018 4.02425 8.5985 4.58343H3.66674C2.65381 4.58343 1.83337 5.40386 1.83337 6.4168V7.79182C1.83337 10.0698 3.68049 11.9169 5.95845 11.9169C8.23641 11.9169 10.0835 10.0698 10.0835 7.79182V7.33348C10.0835 6.82931 10.496 6.4168 11.0002 6.4168C11.5044 6.4168 11.9169 6.82931 11.9169 7.33348V7.79182C11.9169 10.0698 13.764 11.9169 16.042 11.9169C18.3199 11.9169 20.167 10.0698 20.167 7.79182V6.4168C20.167 5.40386 19.3466 4.58343 18.3337 4.58343H13.4019Z" fill="currentColor" />
                                                <path d="M18.3337 15.5837C18.3337 15.0777 17.923 14.667 17.417 14.667C16.3106 14.6844 15.2518 14.2801 14.3269 13.6926C13.4918 13.1609 12.3147 12.8336 11.0002 12.8336C9.68569 12.8336 8.50867 13.17 7.67265 13.7017C6.7413 14.2737 5.69079 14.6872 4.58343 14.667C4.07742 14.667 3.66675 15.0777 3.66675 15.5837C3.66675 15.7487 3.72175 15.8953 3.79875 16.0292L3.78225 16.0283C4.7246 17.4436 6.29946 18.3438 8.01183 18.3337C9.09993 18.3337 10.1404 17.9634 11.0002 17.318C11.861 17.9634 12.9014 18.3337 13.9886 18.3337C15.7001 18.3438 17.2749 17.4436 18.2173 16.0283L18.2008 16.0292C18.2787 15.8953 18.3337 15.7487 18.3337 15.5837Z" fill="currentColor" opacity="0.35" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex flex-col">
                                    <div class="text-xxs leading-tight font-medium text-gray-500">
                                        #{{ profileSummary["user"].fid }}
                                    </div>
                                    <div class="text-sm font-bold mt-0.5 flex items-center">
                                        <div class="inline" v-text="profileSummary['user'].profile.full_name"></div>
                                        <div v-if="profileSummary['user'].uuid === user['id']" class="inline ml-1.5 leading-none bg-gray-200 py-0.5 px-1 rounded text-xxs font-semibold text-gray-400">
                                            You
                                        </div>
                                    </div>
                                    <div class="text-xxs font-medium">
                                        +91 {{ profileSummary["user"].phone_number }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </GiveFeedbackModalPage>
                </AppComponentBase>
            </template>

            <template v-if="shouldShowVerify" #footer>
                <div class="grid grid-cols-2 gap-3">
                    <button :disabled="isProcessing" class="disabled:bg-gray-50 disabled:text-gray-300 py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-red-500 text-white active:bg-red-700 focus:outline-none transition-all" type="button" @click="handleSubmit">
                        <div v-show="isProcessing && isRejecting" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                        {{ isRejecting ? "Rejecting..." : "Reject" }}
                    </button>

                    <button :disabled="isProcessing" class="disabled:bg-gray-50 disabled:text-gray-300 py-3.5 px-4 w-full font-medium text-xs select-none inline-flex justify-center items-center gap-2 rounded-lg border border-transparent bg-green-500 text-white active:bg-green-700 focus:outline-none transition-all" type="button" @click="handleSubmit">
                        <div v-show="isProcessing && isVerifying" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                        {{ isVerifying ? "Verifying..." : "Verify" }}
                    </button>
                </div>
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import Button from "@/components/button/Button.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import ModalPage from "@/components/modal-page/ModalPage.vue";
import { executeAfter, resolveFileUrl } from "@/helpers/general";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import GiveFeedbackModalPage from "@/modals/misc/GiveFeedbackModalPage.vue";
import ProfileSummary from "@/modals/profile/ProfileSummaryModalPage.vue";
import router from "@/router";
import ProfileService from "@/services/profile.service";
import ProfileSummarySkeleton from "@/skeleton/ProfileSummarySkeleton.vue";
import { useAuthStore } from "@/stores/authStore";
import { set, syncRef } from "@vueuse/core";
import clsx from "clsx";
import { storeToRefs } from "pinia";
import { nextTick, ref } from "vue";

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);
const refProfileSummaryModalPage = ref<InstanceType<typeof ProfileSummary> | null>(null);
const refGiveFeedbackModalPage = ref<InstanceType<typeof GiveFeedbackModalPage> | null>(null);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const userId = ref("");
const profileSummary = ref({});
const isFetching = ref(true);
const shouldShowVerify = ref(false);
const isProcessing = ref(false);
const isRejecting = ref(false);
const isVerifying = ref(false);

const handleProfileSummaryOnSuccess = (data: any) => {
    set(profileSummary, data);
    console.log(data);
};

const fetchProfileSummary = () => {
    const { isLoading, execute } = ProfileService.getSummary({ id: userId.value }, handleProfileSummaryOnSuccess);
    syncRef(isLoading, isFetching);
    execute();
};

const openProfileSummaryModalPage = (id: string) => {
    executeAfter(() => {
        refProfileSummaryModalPage.value?.openModal(id);
        refModalPage.value?.suspend();
    });
};

const onProfileSummaryModalPageClose = () => {
    refModalPage.value?.resume();
};

const openGiveFeedbackModalPage = (id: string) => {
    executeAfter(() => {
        refGiveFeedbackModalPage.value?.openModal(id);
        refModalPage.value?.suspend();
    });
};

const onGiveFeedbackModalPageClose = () => {
    refModalPage.value?.resume();
};

const openModal = (id: string, showVerify: boolean = false) => {
    refModalPage.value?.openModal(`profile-summary-${id}`);
    nextTick(() => {
        set(userId, id);
        set(shouldShowVerify, showVerify);
        fetchProfileSummary();
    });
};

const doOnClose = () => {
    executeAfter(() => {
        set(userId, "");
        set(isFetching, true);
    }, 100);
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