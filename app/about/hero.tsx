import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroComponents() {
  return (
    <div className='heroComponents'>
        <div className='heroContainer'>
            <div className='hContainer'>
                <h1>Who is Arcdev?</h1>
                <p>Arcdev adalah tim kecil pengembang website yang fokus pada pembuatan website custom sesuai permintaan klien. Kami percaya bahwa setiap brand punya cerita unik, dan tugas kami adalah menerjemahkannya ke dalam bentuk website yang fungsional, menarik, dan tepat sasaran. Mulai dari UMKM, startup, hingga individu yang butuh kehadiran digital—Arcdev hadir sebagai partner yang siap dengar dan wujudkan.</p>
            </div>
            <div className='hContainer'>
                <Image className='dark:invert' src="/Arcdev.png" width={500} height={500} alt="Arcdev" />
            </div>
        </div>
    </div>
  )
}
