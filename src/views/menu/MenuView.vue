<template>
    <div class="grow -mb-8 pb-4 flex flex-col">
        <AppComponentBase class="shrink-0">
            <div class="flex flex-col gap-2">
                <div class="rounded-lg overflow-hidden border border-gray-200 divide-gray-200 divide-y">
                    <transition mode="out-in" name="fade">
                        <div v-if="!user['data']" class="px-3 py-3.5 shrink-0 flex gap-4 items-center">
                            <div class="h-14 w-14 relative bg-gray-100 rounded-full animate-pulse"></div>
                            <div class="grow flex flex-col animate-pulse">
                                <div class="bg-gray-100 h-2.5 rounded w-10"></div>
                                <div class="mt-0.5 flex items-center">
                                    <div class="inline h-4 bg-gray-100 mt-1 w-20 rounded"></div>
                                </div>
                                <div class="bg-gray-100 rounded h-2.5 w-14 mt-1.5"></div>
                            </div>
                        </div>
                        <div v-else class="px-3 py-3.5 shrink-0 flex gap-4 items-center">
                            <div class="h-14 w-14 relative border border-gray-200 rounded-full">
                                <img :src="resolveFileUrl(user['data']?.profile.avatar_url) || ''" alt="" class="w-full h-full rounded-full object-cover object-center">

                                <div v-if="user['data']?.user_type === 'JANSEVAK'" class="absolute h-6 w-6 bg-orange-100 text-orange-500 shadow-[0_0_0_3px_white] rounded-full -right-1 -bottom-1 flex">
                                    <svg class="mx-auto my-auto h-4 w-4" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.4019 4.58343C12.7602 4.02425 11.9169 3.66675 11.0002 3.66675C10.0835 3.66675 9.24018 4.02425 8.5985 4.58343H3.66674C2.65381 4.58343 1.83337 5.40386 1.83337 6.4168V7.79182C1.83337 10.0698 3.68049 11.9169 5.95845 11.9169C8.23641 11.9169 10.0835 10.0698 10.0835 7.79182V7.33348C10.0835 6.82931 10.496 6.4168 11.0002 6.4168C11.5044 6.4168 11.9169 6.82931 11.9169 7.33348V7.79182C11.9169 10.0698 13.764 11.9169 16.042 11.9169C18.3199 11.9169 20.167 10.0698 20.167 7.79182V6.4168C20.167 5.40386 19.3466 4.58343 18.3337 4.58343H13.4019Z" fill="currentColor" />
                                        <path d="M18.3337 15.5837C18.3337 15.0777 17.923 14.667 17.417 14.667C16.3106 14.6844 15.2518 14.2801 14.3269 13.6926C13.4918 13.1609 12.3147 12.8336 11.0002 12.8336C9.68569 12.8336 8.50867 13.17 7.67265 13.7017C6.7413 14.2737 5.69079 14.6872 4.58343 14.667C4.07742 14.667 3.66675 15.0777 3.66675 15.5837C3.66675 15.7487 3.72175 15.8953 3.79875 16.0292L3.78225 16.0283C4.7246 17.4436 6.29946 18.3438 8.01183 18.3337C9.09993 18.3337 10.1404 17.9634 11.0002 17.318C11.861 17.9634 12.9014 18.3337 13.9886 18.3337C15.7001 18.3438 17.2749 17.4436 18.2173 16.0283L18.2008 16.0292C18.2787 15.8953 18.3337 15.7487 18.3337 15.5837Z" fill="currentColor" opacity="0.35" />
                                    </svg>
                                </div>
                            </div>
                            <div class="grow flex flex-col">
                                <div class="text-xxs leading-tight font-medium text-gray-500">
                                    # {{ user["data"]?.fid }}
                                </div>
                                <div class="text-sm font-semibold">
                                    {{ user["data"]?.profile.full_name }}
                                </div>
                                <div class="text-xxs font-medium">
                                    <div class="text-gray-400 inline">Phone:</div>
                                    +91 {{ user["data"]?.phone_number }}
                                </div>
                            </div>
                        </div>
                    </transition>

                    <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 active:bg-gray-100 focus:outline-none transition-all" @click="openProfileSummaryModalPage">
                        <div class="grow flex items-center gap-2.5">
                            <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.07993 14.3231C0.544483 12.3706 0.544483 9.62879 2.07993 7.67626C3.88213 5.38546 6.85585 2.75 11.0002 2.75C15.1445 2.75 18.1182 5.38547 19.9204 7.67717C21.4559 9.62971 21.4559 12.3715 19.9204 14.324C18.1182 16.6148 15.1445 19.2503 11.0002 19.2503C6.85585 19.2503 3.88213 16.6148 2.07993 14.3231Z" fill="currentColor" opacity="0.35" />
                                <path d="M11.0002 5.5C7.96233 5.5 5.50012 7.96221 5.50012 11.0001C5.50012 14.038 7.96233 16.5002 11.0002 16.5002C14.0381 16.5002 16.5003 14.038 16.5003 11.0001C16.5003 7.96221 14.0381 5.5 11.0002 5.5ZM11.9169 11.9168C10.904 11.9168 10.0835 11.0964 10.0835 10.0834C10.0835 9.07048 10.904 8.25005 11.9169 8.25005C12.9298 8.25005 13.7503 9.07048 13.7503 10.0834C13.7503 11.0964 12.9298 11.9168 11.9169 11.9168Z" fill="currentColor" />
                            </svg>

                            View Profile Summary
                        </div>
                        <div class="shrink-0">
                            <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                            </svg>
                        </div>
                    </button>
                </div>

                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openSetPasswordModalPage">
                    <div class="grow flex items-center gap-2.5">
                        <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3438 3.65663C17.1356 2.44844 15.1766 2.44844 13.9684 3.65663L3.8574 13.7484C3.58057 14.0252 3.39631 14.38 3.32939 14.7659L2.76563 18.0357C2.64372 18.7434 3.25881 19.3576 3.96649 19.2347L7.1978 18.6728C7.58097 18.6059 7.93481 18.4226 8.20982 18.1476L18.3438 8.03104C19.5529 6.82285 19.5529 4.86482 18.3438 3.65663Z" fill="currentColor" opacity="0.35" />
                            <path d="M11.9856 5.63211L16.3609 10.0074L18.1796 8.19515L13.8043 3.81982L11.9856 5.63211Z" fill="currentColor" />
                            <path d="M3.10939 16.042L2.76563 18.0358C2.64372 18.7435 3.25881 19.3576 3.96649 19.2348L5.95661 18.8883L3.10939 16.042Z" fill="currentColor" />
                        </svg>

                        Edit Profile
                    </div>
                    <div class="shrink-0">
                        <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                        </svg>
                    </div>
                </button>

                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openSetPasswordModalPage">
                    <div class="grow flex items-center gap-2.5">
                        <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6668 11.0001H7.33337V19.2503H14.6668V11.0001Z" fill="currentColor" opacity="0.35" />
                            <path d="M14.6669 8.2501C16.1857 8.2501 17.417 7.01886 17.417 5.50005C17.417 3.98124 16.1857 2.75 14.6669 2.75C13.1481 2.75 11.9169 3.98124 11.9169 5.50005C11.9169 7.01886 13.1481 8.2501 14.6669 8.2501Z" fill="currentColor" opacity="0.35" />
                            <path d="M7.33342 8.2501C8.85224 8.2501 10.0835 7.01886 10.0835 5.50005C10.0835 3.98124 8.85224 2.75 7.33342 2.75C5.81461 2.75 4.58337 3.98124 4.58337 5.50005C4.58337 7.01886 5.81461 8.2501 7.33342 8.2501Z" fill="currentColor" opacity="0.35" />
                            <path d="M15.5836 10.0835H6.41673C4.39178 10.0835 2.75 11.7253 2.75 13.7502V15.5836C2.75 17.6086 4.39178 19.2503 6.41673 19.2503H8.2501V18.3336C8.2501 17.3207 9.07053 16.5003 10.0835 16.5003H11.9168C12.9298 16.5003 13.7502 17.3207 13.7502 18.3336V19.2503H15.5836C17.6085 19.2503 19.2503 17.6086 19.2503 15.5836V13.7502C19.2503 11.7253 17.6085 10.0835 15.5836 10.0835ZM11.0002 15.5836C9.98722 15.5836 9.16678 14.7632 9.16678 13.7502C9.16678 12.7373 9.98722 11.9169 11.0002 11.9169C12.0131 11.9169 12.8335 12.7373 12.8335 13.7502C12.8335 14.7632 12.0131 15.5836 11.0002 15.5836Z" fill="currentColor" />
                            <path d="M19.012 8.4884C18.539 8.01539 18.385 7.33521 18.3355 6.88053C18.307 6.61378 18.5298 6.39103 18.7965 6.41944C19.2512 6.46803 19.9314 6.62295 20.4044 7.09596C20.8774 7.56896 21.0314 8.24914 21.0809 8.70382C21.1093 8.97057 20.8866 9.19333 20.6198 9.16491C20.1661 9.11541 19.485 8.96049 19.012 8.4884Z" fill="currentColor" opacity="0.35" />
                        </svg>

                        Family Group
                    </div>
                    <div class="shrink-0">
                        <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                        </svg>
                    </div>
                </button>

                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openSetPasswordModalPage">
                    <div class="grow flex items-center gap-2.5">
                        <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5003 19.2503H5.50005C3.98111 19.2503 2.75 18.0192 2.75 16.5003V9.1668C2.75 7.64785 3.98111 6.41675 5.50005 6.41675H16.5003C18.0192 6.41675 19.2503 7.64785 19.2503 9.1668V16.5003C19.2503 18.0192 18.0192 19.2503 16.5003 19.2503Z" fill="currentColor" opacity="0.35" />
                            <path d="M7.33337 6.41673C7.33337 4.39177 8.97515 2.74999 11.0001 2.74999C13.0251 2.74999 14.6668 4.39177 14.6668 6.41673H16.5002C16.5002 3.37884 14.038 0.916626 11.0001 0.916626C7.96221 0.916626 5.5 3.37884 5.5 6.41673H7.33337Z" fill="currentColor" />
                            <path d="M10.9167 14.2462H10.9121C10.4327 14.2462 10.0624 13.8126 10.144 13.3396C10.3942 11.8976 11.5171 11.8481 11.5171 10.9525C11.5171 10.7041 11.4741 10.1477 10.8755 10.1477C10.5519 10.1477 10.3612 10.3548 10.2503 10.5748C10.1009 10.8728 9.75528 11.0203 9.42711 10.9626C8.92843 10.8746 8.62226 10.3402 8.83401 9.87999C9.13652 9.22365 9.75528 8.53613 10.98 8.53613C12.9683 8.53613 13.235 10.0927 13.235 10.8251C13.235 12.5558 11.9462 12.62 11.6794 13.6173C11.5831 13.9766 11.2889 14.2462 10.9167 14.2462ZM11.9489 16.0804C11.9489 16.3756 11.8572 16.624 11.6748 16.8275C11.4915 17.0292 11.2513 17.131 10.9561 17.131C10.66 17.131 10.4199 17.0292 10.2375 16.8275C10.055 16.6249 9.96245 16.3756 9.96245 16.0804C9.96245 15.7917 10.055 15.5433 10.2375 15.3324C10.4199 15.1225 10.6591 15.018 10.9561 15.018C11.2513 15.018 11.4915 15.1225 11.6748 15.3324C11.8581 15.5433 11.9489 15.7917 11.9489 16.0804Z" fill="currentColor" />
                        </svg>

                        Set Password
                    </div>
                    <div class="shrink-0">
                        <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                        </svg>
                    </div>
                </button>

                <div v-if="['JANSEVAK', 'ADMIN'].includes(user['data']?.user_type)" class="flex flex-col gap-2">
                    <div class="w-full flex my-1.5">
                        <div class="mx-auto my-auto h-px w-4 bg-gray-200"></div>
                    </div>

                    <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openNagariksListModalPage(false)">
                        <div class="grow flex items-center gap-2.5">
                            <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                                <path d="M10.0835 14.6669C9.8488 14.6669 9.61413 14.5771 9.43537 14.3983L6.68532 11.6483C6.3269 11.2898 6.3269 10.7105 6.68532 10.3521C7.04374 9.99364 7.62309 9.99364 7.98151 10.3521L10.0835 12.454L14.0188 8.5187C14.3772 8.16027 14.9566 8.16027 15.315 8.5187C15.6734 8.87712 15.6734 9.45646 15.315 9.81489L10.7316 14.3983C10.5528 14.5771 10.3181 14.6669 10.0835 14.6669Z" fill="currentColor" />
                            </svg>

                            Verify Pending Nagariks
                        </div>
                        <div class="shrink-0">
                            <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                            </svg>
                        </div>
                    </button>

                    <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openNagariksListModalPage(true)">
                        <div class="grow flex items-center gap-2.5">
                            <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.87514 9.16678C8.64709 9.16678 10.0835 7.73034 10.0835 5.95839C10.0835 4.18645 8.64709 2.75 6.87514 2.75C5.10319 2.75 3.66675 4.18645 3.66675 5.95839C3.66675 7.73034 5.10319 9.16678 6.87514 9.16678Z" fill="currentColor" opacity="0.35" />
                                <path d="M15.1253 9.16678C16.8972 9.16678 18.3337 7.73034 18.3337 5.95839C18.3337 4.18645 16.8972 2.75 15.1253 2.75C13.3533 2.75 11.9169 4.18645 11.9169 5.95839C11.9169 7.73034 13.3533 9.16678 15.1253 9.16678Z" fill="currentColor" opacity="0.35" />
                                <path d="M20.1671 16.0419C20.1671 17.8111 18.7279 19.2503 16.9587 19.2503H9.62524C11.3944 19.2503 12.8336 17.8111 12.8336 16.0419C12.8336 15.1619 12.4761 14.3552 11.8895 13.7777C11.3119 13.191 10.5053 12.8335 9.62524 12.8335H16.9587C18.7279 12.8335 20.1671 14.2727 20.1671 16.0419Z" fill="currentColor" />
                                <path d="M13.7503 12.8335V19.2503H5.04177C4.16175 19.2503 3.35507 18.8928 2.77756 18.3061C2.19088 17.7286 1.83337 16.9219 1.83337 16.0419C1.83337 14.2727 3.27257 12.8335 5.04177 12.8335H13.7503Z" fill="currentColor" opacity="0.35" />
                            </svg>

                            View Nagariks
                        </div>
                        <div class="shrink-0">
                            <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                            </svg>
                        </div>
                    </button>
                </div>

                <div class="w-full flex my-1.5">
                    <div class="mx-auto my-auto h-px w-4 bg-gray-200"></div>
                </div>

                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openGiveFeedbackModalPage">
                    <div class="grow flex items-center gap-2.5">
                        <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.12503 7.33337H5.95839C6.71741 7.33337 7.33342 7.94939 7.33342 8.7084V17.8752C7.33342 18.6342 6.71741 19.2503 5.95839 19.2503H4.12503C3.36601 19.2503 2.75 18.6342 2.75 17.8752V8.7084C2.75 7.94939 3.36601 7.33337 4.12503 7.33337Z" fill="currentColor" />
                            <path d="M14.9813 19.2503H9.16674C8.15381 19.2503 7.33337 18.4299 7.33337 17.4169V8.38943C7.33337 7.71016 7.58455 7.05474 8.03922 6.54964L10.2897 4.04985L10.6371 1.95798C10.7939 1.01563 11.9159 0.615035 12.6456 1.23196C13.2368 1.73156 13.7502 2.47315 13.7502 3.54201C13.7502 5.16087 12.8335 7.33341 12.8335 7.33341H17.4169C18.9358 7.33341 20.1669 8.56451 20.1669 10.0835V11.3045C20.1669 11.7078 20.078 12.1066 19.9066 12.4714L17.471 17.6672C17.0181 18.6334 16.0483 19.2503 14.9813 19.2503Z" fill="currentColor" opacity="0.35" />
                        </svg>

                        Give Feedback
                    </div>
                    <div class="shrink-0">
                        <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                        </svg>
                    </div>
                </button>

                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openTermsOfServiceModalPage">
                    <div class="grow flex items-center gap-2.5">
                        <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.66673 20.167C1.64453 20.167 0 18.5225 0 16.5003V6.41673C0 4.39453 1.64453 2.75 3.66673 2.75C4.42575 2.75 5.04176 3.36509 5.04176 4.12503C5.04176 4.88496 4.42575 5.50005 3.66673 5.50005C3.16072 5.50005 2.75005 5.91164 2.75005 6.41673V16.5003C2.75005 17.0053 3.16072 17.4169 3.66673 17.4169C4.42575 17.4169 5.04176 18.032 5.04176 18.792C5.04176 19.5519 4.42575 20.167 3.66673 20.167Z" fill="currentColor" opacity="0.35" />
                            <path d="M18.3336 20.167C17.5746 20.167 16.9586 19.5519 16.9586 18.792C16.9586 18.032 17.5746 17.4169 18.3336 17.4169C18.8397 17.4169 19.2503 17.0053 19.2503 16.5003V6.41673C19.2503 5.91164 18.8397 5.50005 18.3336 5.50005C17.5746 5.50005 16.9586 4.88496 16.9586 4.12503C16.9586 3.36509 17.5746 2.75 18.3336 2.75C20.3558 2.75 22.0004 4.39453 22.0004 6.41673V16.5003C22.0004 18.5225 20.3558 20.167 18.3336 20.167Z" fill="currentColor" opacity="0.35" />
                            <path d="M15.1253 10.0834H6.87515C6.11613 10.0834 5.50012 9.46833 5.50012 8.7084C5.50012 7.94847 6.11613 7.33337 6.87515 7.33337H15.1253C15.8843 7.33337 16.5003 7.94847 16.5003 8.7084C16.5003 9.46833 15.8843 10.0834 15.1253 10.0834Z" fill="currentColor" />
                            <path d="M12.3752 15.5835H6.87515C6.11613 15.5835 5.50012 14.9685 5.50012 14.2085C5.50012 13.4486 6.11613 12.8335 6.87515 12.8335H12.3752C13.1343 12.8335 13.7503 13.4486 13.7503 14.2085C13.7503 14.9685 13.1343 15.5835 12.3752 15.5835Z" fill="currentColor" />
                        </svg>

                        Terms of Service
                    </div>
                    <div class="shrink-0">
                        <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                        </svg>
                    </div>
                </button>

                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="openAboutPlatformModalPage">
                    <div class="grow flex items-center gap-2.5">
                        <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0002 20.167C16.0629 20.167 20.167 16.0629 20.167 11.0002C20.167 5.93751 16.0629 1.83337 11.0002 1.83337C5.93751 1.83337 1.83337 5.93751 1.83337 11.0002C1.83337 16.0629 5.93751 20.167 11.0002 20.167Z" fill="currentColor" opacity="0.35" />
                            <path d="M10.8929 12.8088H10.8874C10.2732 12.8088 9.79929 12.2542 9.90471 11.6492C10.2256 9.80395 11.662 9.73978 11.662 8.59393C11.662 8.27584 11.607 7.56358 10.8406 7.56358C10.4263 7.56358 10.1825 7.8285 10.0404 8.11084C9.84879 8.49309 9.40695 8.68101 8.9862 8.60676C8.34818 8.49309 7.95676 7.80925 8.22718 7.22074C8.61402 6.38014 9.40604 5.50012 10.9745 5.50012C13.5192 5.50012 13.8602 7.49299 13.8602 8.42984C13.8602 10.6446 12.2111 10.7271 11.8692 12.0031C11.7454 12.4633 11.3696 12.8088 10.8929 12.8088ZM12.2148 15.1556C12.2148 15.5332 12.0983 15.8522 11.8646 16.1117C11.6299 16.3702 11.3228 16.5003 10.9451 16.5003C10.5656 16.5003 10.2595 16.3702 10.0257 16.1117C9.79196 15.8522 9.67371 15.5332 9.67371 15.1556C9.67371 14.7861 9.79196 14.468 10.0257 14.1976C10.2595 13.929 10.5656 13.7952 10.9451 13.7952C11.3228 13.7952 11.6299 13.929 11.8646 14.1976C12.0983 14.468 12.2148 14.787 12.2148 15.1556Z" fill="currentColor" />
                        </svg>

                        About Jansevak
                    </div>
                    <div class="shrink-0">
                        <svg class="w-3.5 h-3.5 text-gray-400 -rotate-90" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0001 12.2967L5.52877 6.82535C4.93596 6.23253 3.97371 6.23253 3.38089 6.82535C2.78808 7.41816 2.78808 8.38042 3.38089 8.97323L9.98778 15.5801C10.5477 16.14 11.4541 16.14 12.0125 15.5801L18.6194 8.97323C19.2122 8.38042 19.2122 7.41816 18.6194 6.82535C18.0266 6.23253 17.0643 6.23253 16.4715 6.82535L11.0001 12.2967Z" fill="currentColor" />
                        </svg>
                    </div>
                </button>

                <div class="w-full flex my-1.5">
                    <div class="mx-auto my-auto h-px w-4 bg-gray-200"></div>
                </div>

                <button :disabled="isLoggingOut" class="disabled:bg-gray-50 disabled:text-gray-300 py-2.5 px-3 w-full font-medium text-xs select-none inline-flex text-left items-center gap-2 rounded-lg border border-gray-200 active:bg-gray-100 focus:outline-none transition-all" @click="handleLogout">
                    <div class="grow flex items-center gap-2.5">
                        <svg class="h-5 w-5 text-orange-500" fill="none" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.3337 4.58342V17.417C18.3337 18.9359 17.1026 20.167 15.5836 20.167H6.4168C4.89785 20.167 3.66675 18.9359 3.66675 17.417V4.58342C3.66675 3.06448 4.89785 1.83337 6.4168 1.83337H15.5836C17.1026 1.83337 18.3337 3.06448 18.3337 4.58342Z" fill="currentColor" opacity="0.35" />
                            <path d="M16.5003 9.16687H10.0835C9.07055 9.16687 8.25012 9.9873 8.25012 11.0002C8.25012 12.0132 9.07055 12.8336 10.0835 12.8336H16.5003V9.16687Z" fill="currentColor" />
                            <path d="M15.1978 14.787C15.1978 15.4937 16.0503 15.8494 16.5526 15.3517L20.1213 11.8169C20.575 11.3668 20.575 10.6335 20.1213 10.1834L16.5526 6.64866C16.0503 6.15182 15.1978 6.50749 15.1978 7.21334V14.787Z" fill="currentColor" />
                        </svg>

                        {{ isLoggingOut ? "Logging out..." : "Logout" }}
                    </div>
                    <div class="shrink-0 flex items-center">
                        <div v-show="isLoggingOut" aria-label="loading" class="animate-spin inline-block w-4 h-4 border-[2px] border-current border-t-transparent text-gray-300 rounded-full" role="status"></div>
                    </div>
                </button>
            </div>

            <SetPasswordModalPage ref="refSetPasswordModalPage" />
            <ProfileSummaryModalPage ref="refProfileSummaryModalPage" />
            <AboutPlatformModalPage ref="refAboutPlatformModalPage" />
            <TermsOfServiceModalPage ref="refTermsOfServiceModalPage" />
            <GiveFeedbackModalPage ref="refGiveFeedbackModalPage" />
            <NagariksListModalPage ref="refNagariksListModalPage" />
        </AppComponentBase>

        <AppComponentBase class="shrink-0 grow mt-8 flex flex-col justify-end items-center">
            <div class="w-5/6 text-xxs text-center text-gray-400 leading-tight flex flex-col items-center gap-0.5">
                <div>alpha-1.4.38</div>
                <div class="font-medium">
                    <a class="inline text-blue-400" href="https://xubikle.com" target="_blank">Xubikle LLC</a>
                    &copy; 2019 - {{ DateTime.now().year }}
                </div>
            </div>
        </AppComponentBase>
    </div>
</template>

<script lang="ts" setup>
import { executeAfter, resolveFileUrl } from "@/helpers/general";
import AppComponentBase from "@/layouts/AppComponentBase.vue";
import AboutPlatformModalPage from "@/modals/misc/AboutPlatformModalPage.vue";
import GiveFeedbackModalPage from "@/modals/misc/GiveFeedbackModalPage.vue";
import TermsOfServiceModalPage from "@/modals/misc/TermsOfServiceModalPage.vue";
import ProfileSummaryModalPage from "@/modals/profile/ProfileSummaryModalPage.vue";
import SetPasswordModalPage from "@/modals/set-password/SetPasswordModalPage.vue";
import NagariksListModalPage from "@/modals/user/NagariksListModalPage.vue";
import { useAuthStore } from "@/stores/authStore";
import { set } from "@vueuse/core";
import { DateTime } from "luxon";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const authStore = useAuthStore();
const { isAuthenticated, user } = storeToRefs(authStore);
const { logout } = authStore;

const refSetPasswordModalPage = ref<InstanceType<typeof SetPasswordModalPage>>(null);
const refProfileSummaryModalPage = ref<InstanceType<typeof ProfileSummaryModalPage>>(null);
const refAboutPlatformModalPage = ref<InstanceType<typeof AboutPlatformModalPage>>(null);
const refTermsOfServiceModalPage = ref<InstanceType<typeof TermsOfServiceModalPage>>(null);
const refGiveFeedbackModalPage = ref<InstanceType<typeof GiveFeedbackModalPage>>(null);
const refNagariksListModalPage = ref<InstanceType<typeof NagariksListModalPage>>(null);

const isLoggingOut = ref(false);

const openSetPasswordModalPage = () => {
    executeAfter(() => {
        refSetPasswordModalPage.value?.openModal();
    });
};

const openProfileSummaryModalPage = () => {
    executeAfter(() => {
        refProfileSummaryModalPage.value?.openModal(user.value.id);
    });
};

const openAboutPlatformModalPage = () => {
    executeAfter(() => {
        refAboutPlatformModalPage.value?.openModal();
    });
};

const openTermsOfServiceModalPage = () => {
    executeAfter(() => {
        refTermsOfServiceModalPage.value?.openModal();
    });
};

const openGiveFeedbackModalPage = () => {
    executeAfter(() => {
        refGiveFeedbackModalPage.value?.openModal();
    });
};

const openNagariksListModalPage = (openVerified: boolean) => {
    executeAfter(() => {
        refNagariksListModalPage.value?.openModal(openVerified);
    });
};

const handleLogout = () => {
    set(isLoggingOut, true);
    executeAfter(() => {
        logout();
        if (!isAuthenticated) {
            set(isLoggingOut, false);
        }
    }, 100);
};
</script>

<style scoped>

</style>