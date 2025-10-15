<template>
    <div>
        <div class="font-notoSerifDisplay m-auto md:text-left text-center">
            <img class="w-full mt-16" src="/program.png" alt="">
            <div class="bg-[#e7e0dc] py-16 px-4">
                <h2 style="white-space: pre-line" class="md:text-5xl text-4xl text- font-bold text-center text-[#950032] mb-16 !leading-[55px]">{{ $t('Chuong_trinh_bieu_dien') }}
                </h2>
                <div class="flex flex-col md:flex-row justify-center items-center">
                    <div class="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 md:gap-24 mx-auto w-full gap-0">
                        <h3 style="white-space: pre-line" class="font-semibold text-center text-3xl md:text-4xl text-[#950032] mb-4 !leading-[50px]">{{ $t('tac_pham_giao_huong') }}</h3>
                        <div v-html="$t('tac_pham_giao_huong_noi_dung')" style="white-space: pre-line" class="text-[#572219] col-span-2 !leading-8">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center py-16 bg-[#f9f2f2] px-4">
                <div class="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 md:gap-24 gap-0 mx-auto w-full">
                    <div class="col-span-1">
                        <h3 style="white-space: pre-line" class="font-semibold text-3xl md:text-4xl text-center text-[#950032] !leading-[50px] mb-[-5px] md:mb-4">{{ $t('chuong_trinh_doc_tau') }}</h3>
                    </div>
                    
                    <div v-html="$t('chuong_trinh_doc_tau_noi_dung')" style="white-space: pre-line" class="text-[#572219] col-span-2 !leading-8 mt-0 md:mt-[-30px]">
                    </div>
                </div>
            </div>
            <div class="flex justify-center py-16 bg-[#e7e0dc] px-4">
                <div class="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 md:gap-24 gap-0 mx-auto w-full">
                    <h3 style="white-space: pre-line" class="font-semibold text-3xl md:text-4xl text-center text-[#950032] !leading-[50px] mb-4">{{ $t('tac_pham_hoa_tau') }}</h3>
                    <div v-html="$t('tac_pham_hoa_tau_noi_dung')" style="white-space: pre-line" class="text-[#572219] col-span-2 !leading-8"/>
                </div>
            </div>
        </div>
    </div>
</template>