import { tileCollections, ceramics, naturalstones, porcelains, catalogues } from "@/lib/data";
import Navigation from "../../../../components/navigation";
import Footer from "../../../../components/footer";
import CollectionUI from "./Collection";

export const generateStaticParams = () => {
    return tileCollections.map((collection) => ({ slug: collection.slug }));
}

export default async function ArtisanCollectionPage({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params;
    const collection = tileCollections.find((collection) => collection.slug === slug);

    if (!collection) {
        return <div className="min-h-screen bg-background text-secondary">Collection not found</div>;
    }

    const products = slug === 'ceramic-tiles' ? ceramics : slug === 'porcelain-tiles' ? porcelains : naturalstones;
    const catalogue = catalogues.find((catalogue) => catalogue.product === slug);

    if (!catalogue) {
        return <div className="min-h-screen bg-background text-secondary">Catalogue not found</div>;
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <CollectionUI
                collection={collection}
                products={products}
                catalogue={catalogue}
            />

            <Footer />
        </div>
    );
};