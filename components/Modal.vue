<template>
    <transition :name="`vmodal-${animation}`">
        <div v-if="show" :style="style" :class="[className]" @keyup.esc="onEsc">
            <div>
                <span class="vmodal-close" v-if="!closeButton" @click="$emit('hide')" />
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'vmodal',

    props: {
        show: {
            type: Boolean,
            required: true
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 240
        },
        duration: {
            type: Number,
            default: 300
        },
        hmeasure: {
            type: String,
            default: 'px'
        },
        wmeasure: {
            type: String,
            default: 'px'
        },
        animation: {
            type: String,
            default: 'zoom'
        },
        mask: {
            type: Boolean,
            default: true
        },
        closeButton: {
            type: Boolean,
            default: true
        },
        closeOnEsc: {
            type: Boolean,
            default: false
        },
        closeOnClickMask: {
            type: Boolean,
            default: true
        },
        className: {
            type: String,
            default: ''
        },
        customStyles: {
            type: Object,
            default: () => ({})
        },
        customMaskStyles: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        style() {
            return {
                animationDuration: `${this.duration}ms`
            };
        },
        // dialogStyle() {
        //     return {
        //         // width: this.width + this.wmeasure,
        //         // height: this.height + this.hmeasure,
        //         animationDuration: `${this.duration}ms`,
        //         ...this.customStyles
        //     }
        // }
    },

    watch: {
        show(isShow) {
            isShow && this.$nextTick(() => {
                this.$el.focus();
            })
        }
    },

    methods: {
        onEsc() {
            if (this.show && this.closeOnEsc) {
                this.$emit('hide');
            }
        },
        onClickMask() {
            this.$emit('clickMask');
            if (this.closeOnClickMask) {
                this.$emit('hide');
            }
        }
    }
}
</script>
