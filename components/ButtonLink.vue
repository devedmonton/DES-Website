.<template>
    <nuxt-link
        class="button inline-block align-middle text-center text-green-600 uppercase select-none border font-normal whitespace-no-wrap py-2 px-8 text-base leading-normal no-underline bg-white hover:bg-green-600 hover:text-white"
        :to="href"
    >
        <div>
            <slot></slot>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '#0',
        },
    },
}
</script>

<style>
.button {
    letter-spacing: -0.03em;
    font-variation-settings: 'wght' 700, 'slnt' calc(-1 * 0);
    border-color: theme('colors.grey.400');
    border-bottom-color: theme('colors.green.600');
}

.button:hover,
.button:focus {
    border-color: theme('colors.green.600');
}
</style>
