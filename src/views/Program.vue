<template>
    <div>
        <div class="font-serif m-auto">
            <img class="w-full" src="/src/assets/images/van.png" alt="">
            <div class="bg-[#e7e0dc] py-16">
                <h2 class="text-3xl font-bold text-center text-[#950032] mb-16">{{ $t('Chuong_trinh_bieu_dien') }}
                </h2>
                <div class="flex justify-center">
                    <div class="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto w-full">
                        <h3 class="font-semibold text-3xl text-[#950032]">{{ $t('tac_pham_giao_huong') }}</h3>
                        <div style="white-space: pre-line" class="text-[#572219] col-span-2">
                            {{ $t('tac_pham_giao_huong_noi_dung') }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center py-16 bg-[#f9f2f2]">
                <div class="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto w-full">
                    <div class="col-span-1">
                        <h3 class="font-semibold text-3xl text-[#950032] ">{{ $t('chuong_trinh_doc_tau') }}</h3>
                    </div>
                    
                    <div style="white-space: pre-line" class="text-[#572219] col-span-2">
                        {{ $t('chuong_trinh_doc_tau_noi_dung') }}
                    </div>
                </div>
            </div>
            <div class="justify-center py-16 bg-[#e7e0dc]">
                <div class="max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-24 mx-auto w-full">
                    <h3 class="font-semibold text-3xl text-[#950032]">{{ $t('tac_pham_hoa_tau') }}</h3>
                    <div style="white-space: pre-line" class="text-[#572219] col-span-2">
                        {{ $t('tac_pham_hoa_tau_noi_dung') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>