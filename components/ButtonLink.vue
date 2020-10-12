.<template>
    <component
        :is="href ? 'nuxt-link' : 'button'"
        :to="href"
        class="
            button
            inline-block
            px-8
            py-2
            align-middle
            text-base
            text-center
            uppercase
            font-normal
            whitespace-no-wrap
            leading-normal
            select-none
            border
            no-underline
        "
        :class="[
            appearance === 'default'
                ? 'text-green-600 bg-white border-grey-400 hover:bg-green-600 hover:text-white'
                : null,
            appearance === 'inverted'
                ? 'text-white bg-green-600 border-green-600 hover:bg-green-800 hover:border-green-800'
                : null,
        ]"
    >
        <div>
            <slot />
        </div>
    </component>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            default: '#0',
        },
        appearance: {
            type: String,
            default: 'default',
        },
    },
}
</script>

<style>
.button {
    letter-spacing: -0.03em;
    font-variation-settings: 'wght' 700, 'slnt' calc(-1 * 0);
    border-bottom-color: theme('colors.green.600');
}

.button:hover,
.button:focus {
    border-color: theme('colors.green.600');
}
</style>
