// Styles
import './VAppBarTitle.sass'

// Composables
import { makeTagProps } from '@/composables/tag'

// Utilities
import { defineComponent } from 'vue'
import { makeProps } from '@/util/makeProps'

export default defineComponent({
  name: 'VAppBarTitle',

  props: makeProps({
    ...makeTagProps({ tag: 'header' }),
  }),

  setup (props, { slots }) {
    return () => (
      <props.tag class="v-app-bar-title">
        { slots.default && (
          <div class="v-app-bar-title__placeholder">
            { slots.default() }
          </div>
        ) }
      </props.tag>
    )
  },
})