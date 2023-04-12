<template>
    <ModalPage id="query-detail" ref="refModalPage" :do-on-close="doOnClose">
        <AppContainerBase>
            <template #title>
                Query Detail
            </template>

            <template #header>
                <div class="flex items-center">
                    <button class="-ml-[0.725rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 active:bg-gray-100 focus:outline-none transition-all" type="button" @click="router.back()">
                        <svg class="" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.78401 4.09501C9.6065 4.10018 9.43796 4.17424 9.31408 4.3015L2.93438 10.6812C2.66754 10.9481 2.66754 11.3808 2.93438 11.6478L9.31408 18.0275C9.48552 18.206 9.74011 18.278 9.97964 18.2155C10.2192 18.1531 10.4062 17.966 10.4687 17.7265C10.5311 17.4869 10.4592 17.2323 10.2806 17.0609L5.06777 11.848H18.4555C18.702 11.8515 18.9313 11.722 19.0556 11.5091C19.1799 11.2962 19.1799 11.0328 19.0556 10.8199C18.9313 10.607 18.702 10.4775 18.4555 10.4809H5.06777L10.2806 5.26807C10.4825 5.0715 10.543 4.77125 10.4332 4.51182C10.3234 4.25238 10.0656 4.0869 9.78401 4.09501L9.78401 4.09501Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>

                <div class="flex items-center">
                    <button class="-mr-[0.45rem] py-2 px-2 select-none inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-transparent text-gray-800 active:bg-gray-100 focus:outline-none transition-all" type="button" @click="openAddQueryCommentSheet">
                        <svg fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.042 0.916626C13.2575 0.916626 11.0002 3.17396 11.0002 5.95838C11.0002 8.7428 13.2575 11.0001 16.042 11.0001C18.8264 11.0001 21.0837 8.7428 21.0837 5.95838C21.0837 3.17396 18.8264 0.916626 16.042 0.916626ZM16.042 2.29165C16.295 2.29165 16.5003 2.49699 16.5003 2.74999V5.50004H19.2503C19.5033 5.50004 19.7087 5.70538 19.7087 5.95838C19.7087 6.21138 19.5033 6.41672 19.2503 6.41672H16.5003V9.16677C16.5003 9.41977 16.295 9.62511 16.042 9.62511C15.789 9.62511 15.5836 9.41977 15.5836 9.16677V6.41672H12.8336C12.5806 6.41672 12.3752 6.21138 12.3752 5.95838C12.3752 5.70538 12.5806 5.50004 12.8336 5.50004H15.5836V2.74999C15.5836 2.49699 15.789 2.29165 16.042 2.29165ZM4.81259 3.20833C3.17173 3.20833 1.83337 4.54669 1.83337 6.18755V13.9794C1.83337 15.6202 3.17173 16.9586 4.81259 16.9586H5.5001V19.4794C5.5001 19.9149 5.74342 20.3092 6.13301 20.5062C6.29801 20.5842 6.47179 20.6253 6.64596 20.6253C6.88888 20.6253 7.1318 20.5474 7.33347 20.3961L11.9169 16.9586H17.1878C18.8287 16.9586 20.167 15.6202 20.167 13.9794V10.2526C19.7591 10.6468 19.2962 10.9815 18.792 11.2427V13.9794C18.792 14.864 18.0724 15.5835 17.1878 15.5835H11.6877C11.541 15.5835 11.3942 15.6343 11.275 15.7214L6.87513 19.0211V16.2711C6.87513 15.8906 6.56804 15.5835 6.18762 15.5835H4.81259C3.92799 15.5835 3.2084 14.864 3.2084 13.9794V6.18755C3.2084 5.30295 3.92799 4.58336 4.81259 4.58336H10.2438C10.3583 4.09751 10.533 3.63917 10.7576 3.20833H4.81259Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </template>

            <template #body>
                <PageHeading class="mb-6" emphasis="Detail" title="Query">
                    <template #subtitle>
                        See the query details and the status of the query. You can also comment on the query.
                    </template>
                </PageHeading>

                <AppComponentBase>
                    <transition mode="out-in" name="fade">
                        <QueryInfoSkeleton v-if="isFetchingQueryInfo" />
                        <div v-else>
                            <div class="flex items-center gap-4 mb-2.5">
                                <QueryStatusChip :status="queryInfo.status" class="flex items-center gap-1 font-medium text-xs" icon-class="h-3.5 w-3.5" />

                                <div class="text-gray-500 flex items-center gap-1 font-medium text-xs">
                                    <svg class="h-3.5 w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.7293 2.75C4.09213 2.75 2.75008 4.09205 2.75008 5.72922V11.0001H4.12511V7.79175H17.8753V16.2711C17.8753 17.1649 17.1649 17.8753 16.2712 17.8753H5.7293C4.83551 17.8753 4.12511 17.1649 4.12511 16.2711V14.2085H2.75008V16.2711C2.75008 17.9082 4.09213 19.2503 5.7293 19.2503H16.2712C17.9083 19.2503 19.2504 17.9082 19.2504 16.2711V5.72922C19.2504 4.09205 17.9083 2.75 16.2712 2.75H5.7293ZM5.7293 4.12502H16.2712C17.1649 4.12502 17.8753 4.83543 17.8753 5.72922V6.41673H4.12511V5.72922C4.12511 4.83543 4.83551 4.12502 5.7293 4.12502ZM8.47219 9.61796C8.1923 9.61803 7.94039 9.78774 7.8352 10.0471C7.73 10.3065 7.79251 10.6037 7.99326 10.7987L9.11136 11.9168H2.52091C2.27297 11.9133 2.04235 12.0436 1.91735 12.2577C1.79236 12.4719 1.79236 12.7368 1.91735 12.9509C2.04235 13.1651 2.27297 13.2954 2.52091 13.2918H9.11136L7.99326 14.4099C7.81366 14.5824 7.74131 14.8385 7.80412 15.0794C7.86694 15.3203 8.05509 15.5085 8.29601 15.5713C8.53694 15.6341 8.793 15.5617 8.96544 15.3821L11.2571 13.0904C11.5255 12.8219 11.5255 12.3867 11.2571 12.1182L8.96544 9.82654C8.83597 9.69321 8.65804 9.61797 8.47219 9.61796Z" fill="currentColor" />
                                    </svg>
                                    <div>{{ queryInfo.created_at.toFormat("dd MMM, yyyy") }}</div>
                                </div>

                                <div v-if="queryInfo.total_attachments > 0" class="text-gray-500 flex items-center gap-1 font-medium text-xs">
                                    <svg class="h-3.5 w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4324 1.85401C13.0762 1.85401 11.72 2.36873 10.6905 3.39822L2.12256 11.9662C1.88309 12.1961 1.78662 12.5375 1.87037 12.8587C1.95412 13.18 2.20498 13.4308 2.52623 13.5146C2.84747 13.5983 3.18888 13.5019 3.41881 13.2624L11.9867 4.69447C13.3451 3.33607 15.5197 3.33607 16.8781 4.69447C18.2365 6.05288 18.2365 8.22743 16.8781 9.58583L8.62081 17.8431C7.95869 18.5053 6.91244 18.5053 6.25032 17.8431C5.58821 17.181 5.58821 16.1348 6.25032 15.4727L12.8247 8.89832C13.0641 8.6684 13.1606 8.32698 13.0768 8.00574C12.9931 7.6845 12.7422 7.43363 12.421 7.34988C12.0997 7.26614 11.7583 7.3626 11.5284 7.60207L4.95407 14.1764C3.59124 15.5392 3.59124 17.7765 4.95407 19.1394C6.31691 20.5022 8.55422 20.5022 9.91705 19.1394L18.1744 10.8821C20.2334 8.82309 20.2334 5.45721 18.1744 3.39822C17.1449 2.36873 15.7887 1.85401 14.4324 1.85401Z" fill="currentColor" />
                                    </svg>
                                    <div>{{ queryInfo.total_attachments }}</div>
                                </div>
                            </div>

                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col select-none">
                                    <div class="font-semibold pr-12 leading-tight" v-text="queryInfo.subject"></div>
                                </div>

                                <div class="flex flex-col select-none">
                                    <div class="block text-xs text-gray-400 font-medium mb-1">
                                        Description
                                    </div>
                                    <div class="font-medium pr-4 text-xs leading-tight" v-text="queryInfo.description"></div>
                                </div>
                            </div>

                            <div class="mt-5 flex flex-col gap-2">
                                <div class="flex gap-2">
                                    <div v-if="['ADMIN', 'JANSEVAK'].includes(user['data'].user_type)" class="grow">
                                        <div v-if="queryInfo.status === 'IN_PROGRESS'" class="grow grid grid-cols-2 gap-2">
                                            <button :disabled="isUpdatingQueryStatus" class="disabled:bg-gray-100 disabled:text-gray-300 grow py-2.5 px-2 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-transparent bg-green-500 active:bg-green-600 text-white focus:outline-none transition-all" @click="handleUpdateToResolvedStatus">
                                                <div class="grow justify-center flex items-center gap-2">
                                                    <svg v-if="!isResolvingQuery" class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                                        <path d="M10.0835 14.6669C9.8488 14.6669 9.61413 14.5771 9.43537 14.3983L6.68532 11.6483C6.3269 11.2898 6.3269 10.7105 6.68532 10.3521C7.04374 9.99364 7.62309 9.99364 7.98151 10.3521L10.0835 12.454L14.0188 8.5187C14.3772 8.16027 14.9566 8.16027 15.315 8.5187C15.6734 8.87712 15.6734 9.45646 15.315 9.81489L10.7316 14.3983C10.5528 14.5771 10.3181 14.6669 10.0835 14.6669Z" fill="currentColor" />
                                                    </svg>
                                                    <div v-show="isResolvingQuery" aria-label="loading" class="animate-spin inline-block w-4 h-4 mx-0.5 my-0.5 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                                                    {{ isResolvingQuery ? "Updating..." : "Resolved" }}
                                                </div>
                                            </button>

                                            <button :disabled="isUpdatingQueryStatus" class="disabled:bg-gray-100 disabled:text-gray-300 grow py-2.5 px-2 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-transparent bg-red-500 active:bg-red-600 text-white focus:outline-none transition-all" @click="handleUpdateToRejectedStatus">
                                                <div class="grow justify-center flex items-center gap-2">
                                                    <svg v-if="!isRejectingQuery" class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                                        <path d="M15.9027 13.4854C16.2822 12.7383 16.5004 11.8958 16.5004 11.0002C16.5004 7.96233 14.0382 5.50012 11.0003 5.50012C10.1047 5.50012 9.26223 5.71829 8.51514 6.0978L15.9027 13.4854Z" fill="currentColor" />
                                                        <path d="M6.0978 8.51514C5.71829 9.26223 5.50012 10.1047 5.50012 11.0003C5.50012 14.0382 7.96233 16.5004 11.0002 16.5004C11.8958 16.5004 12.7383 16.2822 13.4854 15.9027L6.0978 8.51514Z" fill="currentColor" />
                                                    </svg>
                                                    <div v-show="isRejectingQuery" aria-label="loading" class="animate-spin inline-block w-4 h-4 mx-0.5 my-0.5 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                                                    {{ isRejectingQuery ? "Updating..." : "Reject" }}
                                                </div>
                                            </button>
                                        </div>

                                        <button v-if="queryInfo.status !== 'IN_PROGRESS'" :disabled="isUpdatingQueryStatus" class="disabled:bg-gray-100 disabled:text-gray-300 grow py-2.5 px-2 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-transparent bg-orange-500 active:bg-orange-600 text-white focus:outline-none transition-all" @click="handleUpdateToInProgressStatus">
                                            <div class="grow justify-center flex items-center gap-2">
                                                <svg v-if="!isUpdatingQueryStatus" class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.0001 1.83337C10.2411 1.83337 9.62512 2.44939 9.62512 3.2084C9.62512 3.96741 10.2411 4.58342 11.0001 4.58342C14.544 4.58342 17.4169 7.45631 17.4169 11.0002C17.4169 14.5441 14.544 17.417 11.0001 17.417C10.2411 17.417 9.62512 18.033 9.62512 18.792C9.62512 19.551 10.2411 20.167 11.0001 20.167C16.063 20.167 20.167 16.0631 20.167 11.0002C20.167 5.93737 16.063 1.83337 11.0001 1.83337Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M10.0835 14.6669C9.8488 14.6669 9.61413 14.5771 9.43537 14.3983L6.68532 11.6483C6.3269 11.2898 6.3269 10.7105 6.68532 10.3521C7.04374 9.99364 7.62309 9.99364 7.98151 10.3521L10.0835 12.454L14.0188 8.5187C14.3772 8.16027 14.9566 8.16027 15.315 8.5187C15.6734 8.87712 15.6734 9.45646 15.315 9.81489L10.7316 14.3983C10.5528 14.5771 10.3181 14.6669 10.0835 14.6669Z" fill="currentColor" />
                                                    <path d="M3.23953 12.4697C3.99893 12.4697 4.61455 11.854 4.61455 11.0946C4.61455 10.3352 3.99893 9.7196 3.23953 9.7196C2.48012 9.7196 1.8645 10.3352 1.8645 11.0946C1.8645 11.854 2.48012 12.4697 3.23953 12.4697Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M4.30569 16.2565C5.06509 16.2565 5.68071 15.6409 5.68071 14.8815C5.68071 14.1221 5.06509 13.5065 4.30569 13.5065C3.54628 13.5065 2.93066 14.1221 2.93066 14.8815C2.93066 15.6409 3.54628 16.2565 4.30569 16.2565Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M7.16934 19.0862C7.92874 19.0862 8.54436 18.4706 8.54436 17.7112C8.54436 16.9518 7.92874 16.3362 7.16934 16.3362C6.40993 16.3362 5.79431 16.9518 5.79431 17.7112C5.79431 18.4706 6.40993 19.0862 7.16934 19.0862Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M7.1813 5.61748C7.94071 5.61748 8.55632 5.00186 8.55632 4.24246C8.55632 3.48305 7.94071 2.86743 7.1813 2.86743C6.42189 2.86743 5.80627 3.48305 5.80627 4.24246C5.80627 5.00186 6.42189 5.61748 7.1813 5.61748Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M4.25796 8.48113C5.01737 8.48113 5.63299 7.86551 5.63299 7.1061C5.63299 6.3467 5.01737 5.73108 4.25796 5.73108C3.49855 5.73108 2.88293 6.3467 2.88293 7.1061C2.88293 7.86551 3.49855 8.48113 4.25796 8.48113Z" fill="currentColor" opacity="0.35" />
                                                </svg>
                                                <div v-show="isUpdatingQueryStatus" aria-label="loading" class="animate-spin inline-block w-4 h-4 mx-0.5 my-0.5 border-[3px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                                                <div class="inline" v-text="isUpdatingQueryStatus ? 'Updating...' : ['RESOLVED', 'REJECTED'].includes(queryInfo.status) ? 'Reopen Query' : 'Start Resolving'"></div>
                                            </div>
                                        </button>
                                    </div>

                                    <button :class="clsx(queryInfo.status === 'IN_PROGRESS' ? 'px-2.5 w-fit' : 'px-5 pr-[1.4rem] grow', (!['ADMIN', 'JANSEVAK'].includes(user['data'].user_type) || queryInfo.status !== 'IN_PROGRESS') && 'grow')" class="shrink-0 py-2.5 font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-200 focus:outline-none transition-all" @click="openAddQueryCommentSheet">
                                        <div class="grow flex justify-center items-center gap-2">
                                            <svg class="h-5 w-5 text-gray-600" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.417 2.75H4.58342C3.06448 2.75 1.83337 3.98111 1.83337 5.50005V17.4169V18.1759C1.83337 19.7765 3.64291 20.7078 4.94551 19.7774L7.5324 17.9294C7.99899 17.5957 8.55816 17.4169 9.13109 17.4169H17.417C18.9359 17.4169 20.167 16.1858 20.167 14.6669V5.50005C20.167 3.98111 18.9359 2.75 17.417 2.75Z" fill="currentColor" opacity="0.35" />
                                                <path d="M13.7503 9.16674H8.25018C7.74325 9.16674 7.3335 8.75607 7.3335 8.25006C7.3335 7.74405 7.74325 7.33337 8.25018 7.33337H13.7503C14.2572 7.33337 14.667 7.74405 14.667 8.25006C14.667 8.75607 14.2572 9.16674 13.7503 9.16674Z" fill="currentColor" />
                                                <path d="M11.9169 12.8335H8.25018C7.74325 12.8335 7.3335 12.4228 7.3335 11.9168C7.3335 11.4108 7.74325 11.0001 8.25018 11.0001H11.9169C12.4238 11.0001 12.8336 11.4108 12.8336 11.9168C12.8336 12.4228 12.4238 12.8335 11.9169 12.8335Z" fill="currentColor" />
                                            </svg>
                                            <div v-if="!['ADMIN', 'JANSEVAK'].includes(user['data'].user_type) || queryInfo.status !== 'IN_PROGRESS'" class="inline">
                                                Comment
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div class="select-none flex flex-col gap-1 mt-8">
                                <div class="font-semibold text-sm leading-tight mr-10">
                                    Users Involved
                                </div>
                                <div class="text-gray-500 leading-tight text-xs mr-10">
                                    Here are the users who created query on behalf of and assigned jansevak to resolve
                                    it.
                                </div>
                            </div>

                            <div class="mt-4 flex flex-col border border-gray-200 divide-y divide-gray-200 rounded-lg overflow-hidden">
                                <div v-for="(user, index) in queryUserRelation" :key="index" class="active:bg-gray-100 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 focus:outline-none transition-all" @click="openProfileSummaryModalPage(user.uuid)">
                                    <div class="flex items-center gap-x-2 w-full">
                                        <img :src="user.avatar_url" alt="" class="w-[1.375rem] h-[1.375rem] shrink-0 shadow-[0_0_0_1px] shadow-gray-100 bg-white object-cover object-center rounded-full bg-gray-100">
                                        <div class="grow overflow-hidden pr-2text-ellipsis whitespace-nowrap">
                                            {{ user.full_name }}
                                        </div>
                                        <div v-if="user.tag.length < 3" class="flex gap-1 shrink-0">
                                            <div v-for="(val, idx) in user.tag" :key="idx" class="bg-gray-100 text-gray-500 uppercase text-xxs font-semibold px-2 rounded py-0.5 max-w-[5.3rem] overflow-hidden whitespace-nowrap text-ellipsis">
                                                {{ sentenceCase(val) }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <transition mode="out-in" name="fade">
                        <QueryAttachmentsSkeleton v-if="isFetchingQueryAttachments" />
                        <div v-else v-if="queryAttachments.attachments.length > 0" class="mt-8">
                            <div class="select-none flex flex-col gap-1">
                                <div class="font-semibold text-sm leading-tight mr-10">
                                    Attached Documents
                                </div>
                                <div class="text-gray-500 leading-tight text-xs mr-10">
                                    Here are the attached documents for your reference and verification.
                                </div>
                            </div>

                            <div class="flex flex-col gap-5 mt-4">
                                <div class="grid grid-cols-1 gap-x-3">
                                    <div class="flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-200 overflow-hidden">
                                        <div v-for="(attachment, index) in queryAttachments.attachments" :key="index" class="flex items-center gap-2 px-2.5 py-1.5">
                                            <div class="flex items-center grow gap-2 overflow-hidden">
                                                <div class="shrink-0 h-5 w-5">
                                                    <svg class="h-full w-full text-red-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.66675 17.417V4.58342C3.66675 3.06448 4.89785 1.83337 6.4168 1.83337H12.8336L18.3337 7.33348V17.417C18.3337 18.9359 17.1026 20.167 15.5836 20.167H6.4168C4.89785 20.167 3.66675 18.9359 3.66675 17.417Z" fill="currentColor" opacity="0.35" />
                                                        <path d="M12.8336 5.50011V1.83337L18.3337 7.33348H14.667C13.654 7.33348 12.8336 6.51304 12.8336 5.50011Z" fill="currentColor" />
                                                        <path d="M8.8946 12.7245C8.8946 14.2261 7.68 14.4956 7.25557 14.4956H6.72023V15.8898C6.72023 16.2272 6.44706 16.5003 6.10972 16.5003C5.77329 16.5003 5.50012 16.2272 5.50012 15.8908V11.7263C5.50012 11.3247 5.82463 11.0002 6.22522 11.0002H7.20882C7.62133 11.0002 8.8946 11.1561 8.8946 12.7245ZM7.7295 12.7484C7.7295 12.1259 7.28674 12.0489 7.11532 12.0489H6.72023V13.4863H7.11624C7.28674 13.4863 7.7295 13.3699 7.7295 12.7484Z" fill="currentColor" />
                                                        <path d="M13.38 13.7658C13.38 15.8494 12.2653 16.5003 11.0956 16.5003H10.2751C9.87455 16.5003 9.55005 16.1758 9.55005 15.7752V11.7262C9.55005 11.3256 9.87455 11.0011 10.2751 11.0011H11.0956C12.3083 11.0002 13.38 11.6831 13.38 13.7658ZM12.1287 13.7658C12.1287 12.311 11.4109 12.0874 11.1112 12.0874H10.8077V15.4113H11.1112C11.4109 15.4122 12.1287 15.2215 12.1287 13.7658Z" fill="currentColor" />
                                                        <path d="M15.3435 12.1195V13.2452H16.1428C16.4261 13.2452 16.6553 13.4744 16.6553 13.7576V13.7961C16.6553 14.0794 16.4261 14.3086 16.1428 14.3086H15.3508V15.8706C15.3508 16.218 15.0694 16.4994 14.722 16.4994C14.3746 16.4994 14.0931 16.218 14.0931 15.8706V11.7253C14.0931 11.3248 14.4176 11.0002 14.8182 11.0002H16.2253C16.5279 11.0002 16.7735 11.2459 16.7735 11.5484V11.5723C16.7735 11.8748 16.5279 12.1204 16.2253 12.1204H15.3435V12.1195Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div class="text-xs font-medium grow overflow-hidden whitespace-nowrap pr-2 text-ellipsis" v-text="attachment.name"></div>
                                            </div>
                                            <a :href="resolveFileUrl(attachment.url) || '#'" class="shrink-0 -mr-1 h-fit flex items-center z-[1] p-1 px-1 w-fit text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button">
                                                <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.5003 19.2503H5.50005C3.98111 19.2503 2.75 18.0192 2.75 16.5003V5.50005C2.75 3.98111 3.98111 2.75 5.50005 2.75H16.5003C18.0192 2.75 19.2503 3.98111 19.2503 5.50005V16.5003C19.2503 18.0192 18.0192 19.2503 16.5003 19.2503Z" fill="currentColor" opacity="0.35" />
                                                    <path d="M12.8335 12.3028V3.13598C12.8335 2.12304 12.0131 1.30261 11.0001 1.30261C9.98718 1.30261 9.16675 2.12304 9.16675 3.13598V12.3028H12.8335Z" fill="currentColor" />
                                                    <path d="M7.21333 11.0002C6.50656 11.0002 6.15089 11.8528 6.64865 12.3551L10.1834 15.9238C10.6335 16.3775 11.3668 16.3775 11.8169 15.9238L15.3516 12.3551C15.8494 11.8528 15.4937 11.0002 14.787 11.0002H7.21333Z" fill="currentColor" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </AppComponentBase>

                <AppComponentBase class="mt-8 mb-4">
                    <transition mode="out-in" name="fade">
                        <QueryCommentsSkeleton v-if="isFetchingQueryComments" />
                        <div v-else>
                            <div class="select-none flex flex-col gap-1">
                                <div class="font-semibold text-sm leading-tight mr-10">
                                    Status Activity
                                </div>
                                <div class="text-gray-500 leading-tight text-xs mr-10">
                                    See the status of query and its activity history here. Updates every second.
                                </div>
                            </div>

                            <div class="flex flex-col gap-5 mt-4">
                                <div class="grid grid-cols-1 gap-x-3">
                                    <TransitionGroup class="flex flex-col relative" name="list" tag="div">
                                        <div v-for="(comment, index) in queryComments" :key="comment.uuid" class="select-none flex items-center gap-2">
                                            <div class="flex items-stretch grow gap-2 overflow-hidden">
                                                <div class="relative flex justify-center shrink-0">
                                                    <div class="w-px h-full bg-gray-200 absolute top-2"></div>
                                                    <div class="shrink-0 h-9 w-9 text-gray-500 border rounded-full z-[1] flex items-center justify-center bg-white">
                                                        <div class="h-[1.1rem] w-[1.1rem]">
                                                            <QueryCommentIcon :status="comment.status" :type="comment.type" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col grow gap-1">
                                                    <div class="h-9 flex flex-col gap-[0.2rem] justify-center pr-10">
                                                        <div class="text-xs w-full leading-none font-semibold overflow-hidden whitespace-nowrap pr-2 text-ellipsis">
                                                            <div v-if="comment.type === 'LOG'" class="inline">
                                                                <div v-if="comment.status === 'CREATED'" class="inline" v-text="'Query Created'"></div>
                                                                <div v-else-if="comment.status === 'IN_REVIEW'" class="inline" v-text="'Query in review'"></div>
                                                                <div v-else class="inline" v-text="sentenceCase(comment.status)"></div>

                                                                <div v-if="comment.user" class="inline">
                                                                    <div v-if="comment.status" class="inline">&nbsp;by&nbsp;</div>
                                                                    <div class="inline" v-text="queryCommentName(comment.user)"></div>
                                                                </div>
                                                            </div>
                                                            <div v-else v-text="queryCommentName(comment.user)"></div>
                                                        </div>
                                                        <div class="text-xxs w-full font-medium leading-none flex items-center gap-1.5 text-gray-400">
                                                            <div>
                                                                <UseTimeAgo v-slot="{ timeAgo }" :time="comment.created_at.toJSDate()" :update-interval="1">
                                                                    {{ sentenceCase(timeAgo) }}
                                                                </UseTimeAgo>
                                                            </div>
                                                            <div class="bg-gray-200 h-1 w-1 rounded-full"></div>
                                                            <div v-text="comment.created_at.toFormat('dd MMM, yyyy - hh:mm a')"></div>
                                                        </div>
                                                    </div>
                                                    <div v-if="index < queryComments.length - 1" class="text-xs leading-tight pb-4 pr-4 whitespace-pre-wrap">
                                                        {{ comment.comment }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TransitionGroup>
                                </div>
                            </div>
                        </div>
                    </transition>
                </AppComponentBase>

                <AddQueryCommentSheet ref="refAddQueryCommentSheet" @on-close="onAddQueryCommentSheetClose" />
                <ProfileSummaryModalPage ref="refProfileSummaryModalPage" @on-close="onProfileSummaryModalPageClose" />
            </template>
        </AppContainerBase>
    </ModalPage>
</template>

<script lang="ts" setup>
import ModalPage from "@/components/modal-page/ModalPage.vue";
import PageHeading from "@/components/headings/PageHeading.vue";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import router from "@/router";
import AppContainerBase from "@/layouts/AppContainerBase.vue";
import { nextTick, onUnmounted, ref } from "vue";
import { set, syncRef, syncRefs, useTimeoutPoll } from "@vueuse/core";
import { executeAfter, executeOnce, resolveFileUrl } from "@/helpers/general";
import type { QueryAttachmentsSchema, QueryCommentSchema, QueryInfoSchema } from "@/services/query.service";
import QueryService from "@/services/query.service";
import QueryAttachmentsSkeleton from "@/skeleton/QueryAttachmentsSkeleton.vue";
import QueryInfoSkeleton from "@/skeleton/QueryInfoSkeleton.vue";
import QueryCommentsSkeleton from "@/skeleton/QueryCommentsSkeleton.vue";
import { DateTime } from "luxon";
import { UseTimeAgo } from "@vueuse/components";
import { sentenceCase } from "change-case";
import QueryCommentIcon from "@/components/query/QueryCommentIcon.vue";
import { useAuthStore } from "@/stores/authStore";
import { storeToRefs } from "pinia";
import { call } from "@/helpers/api";
import QueryStatusChip from "@/components/query/QueryStatusChip.vue";
import AddQueryCommentSheet from "@/sheets/query/AddQueryCommentSheet.vue";
import clsx from "clsx";
import ProfileSummaryModalPage from "@/modals/profile/ProfileSummaryModalPage.vue";

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const queryCommentName = (_user) => {
    return user.value.id === _user.uuid ? _user.full_name : _user.full_name;
};

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);

const refAddQueryCommentSheet = ref<InstanceType<typeof AddQueryCommentSheet> | null>(null);
const refProfileSummaryModalPage = ref<InstanceType<typeof ProfileSummaryModalPage> | null>(null);

const queryInfo = ref<QueryInfoSchema>({
    uuid: "",
    fid: "",
    subject: "",
    description: "",
    status: "",
    deleted_at: null,
    created_at: DateTime.now(),
    category: {
        uuid: "",
        name: "",
    },
    total_attachments: 0,
    creator: {
        uuid: "",
        phone_number: "",
        user_type: "",
        full_name: "",
        avatar_url: "",
    },
    onBehalfOf: {
        uuid: "",
        phone_number: "",
        user_type: "",
        full_name: "",
        avatar_url: "",
        address: {
            address_line_one: "",
            address_line_two: "",
            district: "",
            state: "",
            pincode: "",
            country: "",
        },
    },
    jansevak: {
        uuid: "",
        phone_number: "",
        user_type: "",
        full_name: "",
        avatar_url: "",
    },
});
const queryAttachments = ref<QueryAttachmentsSchema>({
    attachments: [],
    total: 0,
});
const queryComments = ref<QueryCommentSchema[]>([]);
const queryUserRelation = ref([]);

const queryId = ref("");
const isFetchingQueryInfo = ref(true);
const isFetchingQueryAttachments = ref(true);
const isFetchingQueryComments = ref(true);
const isUpdatingQueryStatus = ref(false);
const isResolvingQuery = ref(false);
const isRejectingQuery = ref(false);

const _handleUserRelation = () => {
    const data = queryInfo.value;
    const userRelation = [] as any;

    // push onBehalfOf with tag of "BEHALF_OF"
    userRelation.push({
        uuid: data.onBehalfOf.uuid,
        phone_number: data.onBehalfOf.phone_number,
        user_type: data.onBehalfOf.user_type,
        full_name: data.onBehalfOf.full_name,
        avatar_url: resolveFileUrl(data.onBehalfOf.avatar_url) || "",
        tag: ["BEHALF_OF"],
    });

    // push jansevak with tag of "ASSIGNED_TO"
    userRelation.push({
        uuid: data.jansevak.uuid,
        phone_number: data.jansevak.phone_number,
        user_type: data.jansevak.user_type,
        full_name: data.jansevak.full_name,
        avatar_url: resolveFileUrl(data.jansevak.avatar_url) || "",
        tag: ["ASSIGNED_TO"],
    });

    // push creator with tag of "CREATOR"
    userRelation.push({
        uuid: data.creator.uuid,
        phone_number: data.creator.phone_number,
        user_type: data.creator.user_type,
        full_name: data.creator.full_name,
        avatar_url: resolveFileUrl(data.creator.avatar_url) || "",
        tag: ["CREATOR"],
    });

    // Make sure only unique users are present with their tags merged
    // if tag has "CREATOR" and "BEHALF_OF" then it will be merged to "SELF"
    queryUserRelation.value = userRelation.reduce((acc, curr) => {
        const index = acc.findIndex((item) => item.uuid === curr.uuid);
        if (index === -1) {
            acc.push(curr);
        } else {
            acc[index].tag = [...new Set([...acc[index].tag, ...curr.tag])];
            if (acc[index].tag.includes("CREATOR") && acc[index].tag.includes("BEHALF_OF")) {
                acc[index].tag = ["SELF"];
            }
        }
        return acc;
    }, [] as any);

    console.log(queryUserRelation.value);
};

let handleUserRelation = executeOnce(_handleUserRelation);

const handleQueryInfoOnSuccess = (data: any) => {
    queryInfo.value = {
        uuid: data.uuid,
        fid: data.fid,
        subject: data.subject,
        description: data.description,
        status: data.status,
        deleted_at: data.deleted_at && DateTime.fromISO(data.deleted_at),
        created_at: DateTime.fromISO(data.created_at),
        total_attachments: data.totalAttachments,
        category: {
            uuid: data.queryCategory.uuid,
            name: data.queryCategory.name,
        },
        onBehalfOf: {
            uuid: data.userRelation.onBehalfOfUser.uuid,
            phone_number: data.userRelation.onBehalfOfUser.phone_number,
            user_type: data.userRelation.onBehalfOfUser.user_type,
            full_name: data.userRelation.onBehalfOfUser.profile.full_name,
            avatar_url: resolveFileUrl(data.userRelation.onBehalfOfUser.profile.avatar_url) as string,
            address: {
                address_line_one: data.userRelation.onBehalfOfUser.profile.address.address_line_one,
                address_line_two: data.userRelation.onBehalfOfUser.profile.address.address_line_two,
                district: data.userRelation.onBehalfOfUser.profile.address.district,
                state: data.userRelation.onBehalfOfUser.profile.address.state,
                country: data.userRelation.onBehalfOfUser.profile.address.country,
                pincode: data.userRelation.onBehalfOfUser.profile.address.pincode,
            },
        },
        creator: {
            uuid: data.userRelation.createdByUser.uuid,
            phone_number: data.userRelation.createdByUser.phone_number,
            user_type: data.userRelation.createdByUser.user_type,
            full_name: data.userRelation.createdByUser.profile.full_name,
            avatar_url: resolveFileUrl(data.userRelation.createdByUser.profile.avatar_url) as string,
        },
        jansevak: {
            uuid: data.userRelation.forJansevakUser.uuid,
            phone_number: data.userRelation.forJansevakUser.phone_number,
            user_type: data.userRelation.forJansevakUser.user_type,
            full_name: data.userRelation.forJansevakUser.profile.full_name,
            avatar_url: resolveFileUrl(data.userRelation.forJansevakUser.profile.avatar_url) as string,
        },
    };

    handleUserRelation();
};

const handleQueryAttachmentsOnSuccess = (data: any) => {
    queryAttachments.value = {
        attachments: data.attachments,
        total: data.totalAttachments,
    };

    console.log(queryAttachments.value);
};

const handleQueryCommentsOnSuccess = (data: any) => {
    // push the new comments to top of the array
    queryComments.value = data.map((comment: any) => {
        return <QueryCommentSchema>{
            uuid: comment.uuid,
            type: comment.type,
            comment: comment.comment,
            status: comment.status,
            created_at: DateTime.fromISO(comment.created_at),
            user: comment.user ? {
                uuid: comment.user.uuid,
                phone_number: comment.user.phone_number,
                user_type: comment.user.user_type,
                full_name: comment.user.profile.full_name,
                avatar_url: comment.user.profile.avatar_url,
            } : null,
        };
    });
};

const fetchQueryInfo = (delay: boolean = false) => {
    executeAfter(() => {
        const { isLoading, execute } = QueryService.getQueryInfo({ id: queryId.value }, handleQueryInfoOnSuccess);
        delay ? syncRef(isLoading, isFetchingQueryInfo) : set(isFetchingQueryInfo, false);
        execute();
    }, delay ? 100 : 0);
};

const fetchQueryAttachments = (delay: boolean = false) => {
    executeAfter(() => {
        const {
            isLoading,
            execute,
        } = QueryService.getQueryAttachments({ id: queryId.value }, handleQueryAttachmentsOnSuccess);
        delay ? syncRef(isLoading, isFetchingQueryAttachments) : set(isFetchingQueryAttachments, false);
        execute();
    }, delay ? 100 : 0);
};

const fetchQueryComments = (delay: boolean = false) => {
    executeAfter(() => {
        const {
            isLoading,
            execute,
        } = QueryService.getQueryComments({ id: queryId.value }, handleQueryCommentsOnSuccess);
        delay ? syncRef(isLoading, isFetchingQueryComments) : set(isFetchingQueryComments, false);
        execute();
    }, delay ? 100 : 0);
};

const fetchQueryDetails = () => {
    fetchQueryInfo(true);
    fetchQueryAttachments(true);
    fetchQueryComments(true);

    resumeQueryInfoPoll();
    resumeQueryCommentsPoll();
};

const pollQueryInfo = async () => {
    await call(`query/show/${queryId.value}/info`, "get", {}, {}).then(d => d.data.data).then(handleQueryInfoOnSuccess);
};

const pollQueryComments = async () => {
    await call(`query/show/${queryId.value}/comments`, "get", {}, {}).then(d => d.data.data).then(handleQueryCommentsOnSuccess);
};

const { pause: pauseQueryInfoPoll, resume: resumeQueryInfoPoll } = useTimeoutPoll(pollQueryInfo, 5000);
const { pause: pauseQueryCommentsPoll, resume: resumeQueryCommentsPoll } = useTimeoutPoll(pollQueryComments, 1000);

const handleUpdateToInProgressStatus = () => {
    if (["CREATED", "IN_REVIEW", "RESOLVED", "REJECTED"].includes(queryInfo.value?.status)) {
        const { isLoading, execute } = QueryService.updateQueryStatusToInProgress({
            id: queryId.value,
            ...(["RESOLVED", "REJECTED"].includes(queryInfo.value?.status) && { comment: "Query reopened with status in progress." }),
        }, () => {
            queryInfo.value.status = "IN_PROGRESS";
        });
        syncRef(isLoading, isUpdatingQueryStatus);
        execute();
    }
};

const handleUpdateToResolvedStatus = () => {
    if (["IN_PROGRESS"].includes(queryInfo.value?.status)) {
        const { isLoading, execute } = QueryService.updateQueryStatusToResolved({ id: queryId.value }, () => {
            queryInfo.value.status = "RESOLVED";
        });
        syncRefs(isLoading, [isUpdatingQueryStatus, isResolvingQuery]);
        execute();
    }
};

const handleUpdateToRejectedStatus = () => {
    if (["IN_PROGRESS"].includes(queryInfo.value?.status)) {
        const { isLoading, execute } = QueryService.updateQueryStatusToRejected({ id: queryId.value }, () => {
            queryInfo.value.status = "REJECTED";
        });
        syncRefs(isLoading, [isUpdatingQueryStatus, isRejectingQuery]);
        execute();
    }
};

const openAddQueryCommentSheet = () => {
    executeAfter(() => {
        refAddQueryCommentSheet.value?.openModal(queryInfo.value?.uuid);
        refModalPage.value?.suspend();
    });
};

const onAddQueryCommentSheetClose = () => {
    refModalPage.value?.resume();
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

const openModal = (id: string, status?: string) => {
    refModalPage.value?.openModal();
    nextTick(() => {
        handleUserRelation = executeOnce(_handleUserRelation);
        set(queryId, id);
        fetchQueryDetails();

        if (status && status === "CREATED" && user.value.data.user_type !== "NAGRIK") {
            const { execute } = QueryService.updateQueryStatusToInReview({ id }, console.log);
            execute();
        }
    });
};

const doOnClose = () => {
    handleUserRelation = () => {};

    executeAfter(() => {
        pauseQueryInfoPoll();
        pauseQueryCommentsPoll();

        set(isFetchingQueryAttachments, true);
        set(isFetchingQueryComments, true);
        set(isFetchingQueryInfo, true);
        set(queryId, "");
        set(queryInfo, null);
        set(queryAttachments, null);
        set(queryComments, []);
    }, 100);
};

onUnmounted(() => {
    doOnClose();
});

defineExpose({
    openModal,
    closeModal: () => refModalPage.value?.closeModal(),
    goBack: () => refModalPage.value?.goBack(),
    suspend: () => refModalPage.value?.suspend(),
    resume: () => refModalPage.value?.resume(),
});
</script>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.list-enter-from,
.list-leave-to {
    transform: scaleY(0.9);
    opacity: 0;
}

.list-leave-active {
    position: absolute;
}
</style>