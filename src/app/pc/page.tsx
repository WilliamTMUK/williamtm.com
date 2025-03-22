import { PC_2025, NAS_PLEX, MACBOOK, INTEL_NUC } from '@/data/computers'
import Computers from '@/components/sections/computers'

export default function Page() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">PC</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>And other miscellaneous bits of techno-wizardry…</p>
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">PC (2025)</h2>
        <Computers items={PC_2025} />
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">NAS / Plex Server</h2>
        <Computers items={NAS_PLEX} />
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">Intel NUC (Proxmox)</h2>
        <Computers items={INTEL_NUC} />
      </div>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">MacBook</h2>
        <Computers items={MACBOOK} />
      </div>
    </div>
  )
}
