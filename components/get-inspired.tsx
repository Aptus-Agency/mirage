import Image from 'next/image';
import Button from './ui/Button';

export default function GetInspiredSection() {
    return (
        <section className="section-padding">
            <div className="container-luxury">
                <div className='mb-16'>
                    <h2 className="text-display text-foreground mb-2">Get Inspired</h2>
                    <p className='text-body text-text-secondary'>Projects & Stories</p>
                </div>
                <div className="flex flex-row justify-between gap-8">
                    <div className="w-[60%]">
                        <Image
                            src="https://res.cloudinary.com/zurri-cloud/image/upload/v1755236079/mirage/l8z47zfbwqsa2zmtiz8x.jpg"
                            alt=""
                            width={800}
                            height={800}
                            className="rounded-2xl"
                        />
                    </div>
                    <div className="w-[40%]">
                        <p className='text-heading mb-4'>Kampala hotel lobby project by Mirage Tiles</p>
                        <p className="text-body text-text-secondary leading-relaxed mb-8">Crafted by our Kampala-based team, this hospitality space pairs contemporary design with long‑wear performance. We specified large‑format porcelain with slip‑resistant finishes for high‑traffic areas, warm stone textures in guest zones, and low‑maintenance grout systems—engineered for Uganda’s tropical climate. Locally managed from concept to handover, delivered on time and built to last.</p>
                        <Button>View Our Gallery</Button>
                    </div>

                </div>
            </div>
        </section>
    )
}