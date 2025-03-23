import { PC_2025, NAS_PLEX, MACBOOK, INTEL_NUC } from '@/data/computers'
import Computers from '@/components/sections/computers'

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-heading sm:text-4xl">PCs</h1>
      <p className="mt-2 mb-10 text-lg sm:text-xl">Not quite PCPartPicker…</p>

      <div className="space-y-4 mb-12">
        <h2 className="font-bold text-xl">PC (2025 Build)</h2>
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
