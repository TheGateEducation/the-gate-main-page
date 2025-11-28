// components/UnderConstruction.jsx
export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🚧 En Construcción</h1>
        <p className="text-gray-600">
          Lo sentimos, esta funcionalidad todavía está en desarrollo.
        </p>
        <a href="/" className="mt-4 inline-block text-blue-500 hover:underline">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
import Link from 'next/link';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4">En Construcción</h1>
        <p className="text-lg text-gray-600 mb-8">
          Esta funcionalidad estará disponible pronto.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}