<template>
    <ModalPage id="query-detail" ref="refModalPage">
        <AppContainerBase>
            <template #title>
                Query Detail
            </template>

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
                <PageHeading class="mb-6" emphasis="Detail" title="Query">
                    <template #subtitle>
                        See the query details and the status of the query. You can also comment on the query.
                    </template>
                </PageHeading>

                <AppComponentBase class="mb-2.5">
                    <div class="flex items-center gap-4">
                        <div class="text-yellow-500 flex items-center gap-1 font-medium text-xs">
                            <svg class="h-3.5 w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0002 1.83336C10.6573 1.83336 10.3179 1.85251 9.98321 1.88976C9.65118 1.9179 9.36056 2.124 9.22419 2.42803C9.0878 2.73206 9.12713 3.08616 9.3269 3.35286C9.52666 3.61956 9.85541 3.75687 10.1855 3.71148C10.4522 3.68181 10.7243 3.66672 11.0002 3.66672C15.0611 3.66672 18.3336 6.93923 18.3336 11.0002C18.3336 15.0611 15.0611 18.3336 11.0002 18.3336C10.7243 18.3336 10.4522 18.3186 10.1855 18.2889C10.1552 18.285 10.1248 18.2826 10.0942 18.2817C9.60143 18.2704 9.18786 18.6507 9.158 19.1427C9.12814 19.6347 9.49266 20.0623 9.98321 20.1106C10.293 20.1451 10.6072 20.1626 10.9241 20.1652C10.9494 20.1669 10.9748 20.1675 11.0002 20.167C16.052 20.167 20.167 16.052 20.167 11.0002C20.167 5.97269 16.0911 1.87448 11.0727 1.83514C11.0485 1.83359 11.0243 1.833 11.0002 1.83336ZM7.02727 2.89864L6.51432 3.01144L6.26635 3.1493L6.20548 3.18689L5.67105 3.54139L5.61375 3.58257L5.10976 3.97646L5.05604 4.02211L4.81703 4.24144L4.51893 4.93879L4.84836 5.62273L5.58063 5.82325L6.05419 5.59408L6.26546 5.40072L6.72201 5.04443L7.18662 4.73649L7.40594 4.61295L7.85712 4.00243L7.6933 3.2621L7.02727 2.89864ZM3.7786 6.69518L3.02484 6.78559L2.67303 7.1759L2.58082 7.37194L2.55218 7.43819L2.32032 8.04603L2.29704 8.11585L2.11353 8.74518L2.09563 8.81679L2.02222 9.17487L2.18962 9.9152L2.85833 10.2751L3.56822 10.0083L3.81798 9.54548L3.88423 9.22142L4.04626 8.6664L4.25395 8.12212L4.33004 7.96188L4.34168 7.20275L3.7786 6.69518ZM14.2587 7.78284C13.9888 7.77097 13.7274 7.87873 13.5443 8.07736L9.80776 12.01L7.95023 10.3216C7.57547 9.98098 6.99552 10.0086 6.65488 10.3834C6.31423 10.7582 6.34189 11.3381 6.71665 11.6787L9.23752 13.9705C9.60646 14.3054 10.1754 14.2844 10.5186 13.923L14.8728 9.3396C15.1254 9.08118 15.2027 8.69845 15.0701 8.36226C14.9375 8.02608 14.6197 7.79917 14.2587 7.78284ZM2.63811 11.7692L2.07414 12.2767L2.01147 12.7986L2.01953 12.8452L2.03206 12.9061L2.16366 13.445L2.18067 13.504L2.34628 14.0286L2.36687 14.0859L2.5656 14.5944L2.58977 14.6508L2.67123 14.8236L3.24953 15.315L3.9997 15.2022L4.40792 14.5631L4.33004 14.043L4.2629 13.9006L4.08207 13.4387L3.93973 12.9875L3.82067 12.5023L3.81798 12.4862L3.81619 12.4835L3.8135 12.4728L3.80992 12.4737L3.39097 11.8596L2.63811 11.7692ZM5.33176 16.1735L4.68096 16.5638L4.54667 17.3104L4.81613 17.7616L5.01845 17.946L5.0641 17.9845L5.48305 18.3202L5.5305 18.356L5.97093 18.6649L6.02107 18.6971L6.48209 18.9773L7.23585 19.0677L7.79893 18.5592L7.7864 17.8001L7.43369 17.4107L7.0031 17.1493L6.61817 16.8807L6.23771 16.5764L6.0533 16.4081L5.33176 16.1735Z" fill="currentColor" />
                            </svg>
                            <div>In Progress</div>
                        </div>

                        <div class="text-gray-500 flex items-center gap-1 font-medium text-xs">
                            <svg class="h-3.5 w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.7293 2.75C4.09213 2.75 2.75008 4.09205 2.75008 5.72922V11.0001H4.12511V7.79175H17.8753V16.2711C17.8753 17.1649 17.1649 17.8753 16.2712 17.8753H5.7293C4.83551 17.8753 4.12511 17.1649 4.12511 16.2711V14.2085H2.75008V16.2711C2.75008 17.9082 4.09213 19.2503 5.7293 19.2503H16.2712C17.9083 19.2503 19.2504 17.9082 19.2504 16.2711V5.72922C19.2504 4.09205 17.9083 2.75 16.2712 2.75H5.7293ZM5.7293 4.12502H16.2712C17.1649 4.12502 17.8753 4.83543 17.8753 5.72922V6.41673H4.12511V5.72922C4.12511 4.83543 4.83551 4.12502 5.7293 4.12502ZM8.47219 9.61796C8.1923 9.61803 7.94039 9.78774 7.8352 10.0471C7.73 10.3065 7.79251 10.6037 7.99326 10.7987L9.11136 11.9168H2.52091C2.27297 11.9133 2.04235 12.0436 1.91735 12.2577C1.79236 12.4719 1.79236 12.7368 1.91735 12.9509C2.04235 13.1651 2.27297 13.2954 2.52091 13.2918H9.11136L7.99326 14.4099C7.81366 14.5824 7.74131 14.8385 7.80412 15.0794C7.86694 15.3203 8.05509 15.5085 8.29601 15.5713C8.53694 15.6341 8.793 15.5617 8.96544 15.3821L11.2571 13.0904C11.5255 12.8219 11.5255 12.3867 11.2571 12.1182L8.96544 9.82654C8.83597 9.69321 8.65804 9.61797 8.47219 9.61796Z" fill="currentColor" />
                            </svg>
                            <div>12 Jan, 2023</div>
                        </div>

                        <div class="text-gray-500 flex items-center gap-1 font-medium text-xs">
                            <svg class="h-3.5 w-3.5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4324 1.85401C13.0762 1.85401 11.72 2.36873 10.6905 3.39822L2.12256 11.9662C1.88309 12.1961 1.78662 12.5375 1.87037 12.8587C1.95412 13.18 2.20498 13.4308 2.52623 13.5146C2.84747 13.5983 3.18888 13.5019 3.41881 13.2624L11.9867 4.69447C13.3451 3.33607 15.5197 3.33607 16.8781 4.69447C18.2365 6.05288 18.2365 8.22743 16.8781 9.58583L8.62081 17.8431C7.95869 18.5053 6.91244 18.5053 6.25032 17.8431C5.58821 17.181 5.58821 16.1348 6.25032 15.4727L12.8247 8.89832C13.0641 8.6684 13.1606 8.32698 13.0768 8.00574C12.9931 7.6845 12.7422 7.43363 12.421 7.34988C12.0997 7.26614 11.7583 7.3626 11.5284 7.60207L4.95407 14.1764C3.59124 15.5392 3.59124 17.7765 4.95407 19.1394C6.31691 20.5022 8.55422 20.5022 9.91705 19.1394L18.1744 10.8821C20.2334 8.82309 20.2334 5.45721 18.1744 3.39822C17.1449 2.36873 15.7887 1.85401 14.4324 1.85401Z" fill="currentColor" />
                            </svg>
                            <div>3</div>
                        </div>
                    </div>
                </AppComponentBase>

                <AppComponentBase>
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col select-none">
                            <div class="font-semibold pr-12 leading-tight">
                                Need for domicile certificate for my daughter who is studying in class 10th in school
                            </div>
                        </div>

                        <div class="flex flex-col select-none">
                            <div class="block text-xs text-gray-400 font-medium mb-1">
                                Description
                            </div>
                            <div class="font-medium pr-4 text-xs leading-tight">
                                I am a resident of this area for the last 10 years. I have a daughter who is studying in
                                class 10th in school. I need a domicile certificate for her. I have all the documents
                                required for the same. I need a domicile certificate for her. I have all the documents
                                required for the same.
                            </div>
                        </div>

                        <div class="flex flex-col select-none">
                            <div class="block text-xs text-gray-400 font-medium mb-1">
                                Created & On Behalf Of
                            </div>
                            <div class="font-medium pr-4 text-xs leading-tight">
                                I am a resident of this area for the last 10 years. I have a daughter who is studying in
                                class 10th in school. I need a domicile certificate for her. I have all the documents
                                required for the same. I need a domicile certificate for her. I have all the documents
                                required for the same.
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <AppComponentBase class="mt-8">
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
                                <div v-for="i in '123'" class="flex items-center gap-2 px-2.5 py-1.5">
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
                                        <div class="text-xs font-medium grow overflow-hidden whitespace-nowrap pr-2 text-ellipsis">
                                            prince_nagendra_aadhar-2021-09-01-12-00-00.pdf
                                        </div>
                                    </div>
                                    <button class="shrink-0 -mr-1 h-fit flex items-center z-[1] p-1 px-1 w-fit text-xs select-none inline-flex justify-center items-center rounded-md border border-transparent text-gray-500 hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-all" type="button">
                                        <svg class="h-5 w-5" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                            <path d="M13.5669 14.8503L7.15013 8.43348C6.78345 8.06681 6.78345 7.5168 7.15013 7.15013C7.5168 6.78345 8.06681 6.78345 8.43348 7.15013L14.8503 13.5669C15.2169 13.9336 15.2169 14.4836 14.8503 14.8503C14.4836 15.2169 13.9336 15.2169 13.5669 14.8503Z" fill="currentColor" />
                                            <path d="M7.15013 13.5669L13.5669 7.15013C13.9336 6.78345 14.4836 6.78345 14.8503 7.15013C15.2169 7.5168 15.2169 8.06681 14.8503 8.43348L8.43348 14.8503C8.06681 15.2169 7.5168 15.2169 7.15013 14.8503C6.78345 14.4836 6.78345 13.9336 7.15013 13.5669Z" fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppComponentBase>

                <AppComponentBase class="mt-8 mb-4">
                    <div class="select-none flex flex-col gap-1">
                        <div class="font-semibold text-sm leading-tight mr-10">
                            Status Activity
                        </div>
                        <div class="text-gray-500 leading-tight text-xs mr-10">
                            See the status of query and its activity history here. See the activity history here.
                        </div>
                    </div>

                    <div class="flex flex-col gap-5 mt-4">
                        <div class="grid grid-cols-1 gap-x-3">
                            <div class="flex flex-col">

                                <div v-for="i in '1234'" class="select-none flex items-center gap-2">
                                    <div class="flex items-stretch grow gap-2 overflow-hidden">
                                        <div class="relative flex justify-center shrink-0">
                                            <div class="w-px h-full bg-gray-200 absolute top-2"></div>
                                            <div class="shrink-0 h-9 w-9 text-gray-500 border rounded-full z-[1] flex items-center justify-center bg-white">
                                                <div class="h-5 w-5">
                                                    <svg class="h-full w-full" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.66675 17.417V4.58342C3.66675 3.06448 4.89785 1.83337 6.4168 1.83337H12.8336L18.3337 7.33348V17.417C18.3337 18.9359 17.1026 20.167 15.5836 20.167H6.4168C4.89785 20.167 3.66675 18.9359 3.66675 17.417Z" fill="currentColor" opacity="0.35" />
                                                        <path d="M12.8336 5.50011V1.83337L18.3337 7.33348H14.667C13.654 7.33348 12.8336 6.51304 12.8336 5.50011Z" fill="currentColor" />
                                                        <path d="M8.8946 12.7245C8.8946 14.2261 7.68 14.4956 7.25557 14.4956H6.72023V15.8898C6.72023 16.2272 6.44706 16.5003 6.10972 16.5003C5.77329 16.5003 5.50012 16.2272 5.50012 15.8908V11.7263C5.50012 11.3247 5.82463 11.0002 6.22522 11.0002H7.20882C7.62133 11.0002 8.8946 11.1561 8.8946 12.7245ZM7.7295 12.7484C7.7295 12.1259 7.28674 12.0489 7.11532 12.0489H6.72023V13.4863H7.11624C7.28674 13.4863 7.7295 13.3699 7.7295 12.7484Z" fill="currentColor" />
                                                        <path d="M13.38 13.7658C13.38 15.8494 12.2653 16.5003 11.0956 16.5003H10.2751C9.87455 16.5003 9.55005 16.1758 9.55005 15.7752V11.7262C9.55005 11.3256 9.87455 11.0011 10.2751 11.0011H11.0956C12.3083 11.0002 13.38 11.6831 13.38 13.7658ZM12.1287 13.7658C12.1287 12.311 11.4109 12.0874 11.1112 12.0874H10.8077V15.4113H11.1112C11.4109 15.4122 12.1287 15.2215 12.1287 13.7658Z" fill="currentColor" />
                                                        <path d="M15.3435 12.1195V13.2452H16.1428C16.4261 13.2452 16.6553 13.4744 16.6553 13.7576V13.7961C16.6553 14.0794 16.4261 14.3086 16.1428 14.3086H15.3508V15.8706C15.3508 16.218 15.0694 16.4994 14.722 16.4994C14.3746 16.4994 14.0931 16.218 14.0931 15.8706V11.7253C14.0931 11.3248 14.4176 11.0002 14.8182 11.0002H16.2253C16.5279 11.0002 16.7735 11.2459 16.7735 11.5484V11.5723C16.7735 11.8748 16.5279 12.1204 16.2253 12.1204H15.3435V12.1195Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-col grow gap-1">
                                            <div class="h-9 flex flex-col gap-[0.2rem] justify-center pr-10">
                                                <div class="text-xs w-full leading-none font-semibold overflow-hidden whitespace-nowrap pr-2 text-ellipsis">
                                                    Nagendra Mishra
                                                </div>
                                                <div class="text-xxs w-full font-medium leading-none text-gray-400">
                                                    2 days ago
                                                </div>
                                            </div>
                                            <div class="text-xs leading-tight pb-4 pr-4">
                                                Here is the description of the file that is being uploaded. Here is the
                                                description of the file that is being uploaded.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </AppComponentBase>
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
import { ref } from "vue";

const refModalPage = ref<InstanceType<typeof ModalPage> | null>(null);

const openModal = () => {
    refModalPage.value?.openModal();
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