import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';

// Generate photo list dynamically
const photos = [
  'IMG_1765.JPG', 'IMG_1766.JPG', 'IMG_1767.JPG', 'IMG_1768.JPG', 'IMG_1769.JPG',
  'IMG_1770.JPG', 'IMG_1771.JPG', 'IMG_1772.JPG', 'IMG_1773.JPG', 'IMG_1774.JPG',
  'IMG_1775.JPG', 'IMG_1776.JPG', 'IMG_1777.JPG', 'IMG_1778.JPG', 'IMG_1779.JPG',
  'IMG_1780.JPG', 'IMG_1781.JPG', 'IMG_1782.JPG', 'IMG_1783.JPG', 'IMG_1784.JPG',
  'IMG_1785.JPG', 'IMG_1786.JPG', 'IMG_1787.JPG', 'IMG_1788.JPG', 'IMG_1789.JPG',
  'IMG_1790.JPG', 'IMG_1791.JPG', 'IMG_1792.JPG', 'IMG_1793.JPG', 'IMG_1794.JPG',
  'IMG_1795.JPG', 'IMG_1796.JPG', 'IMG_1797.JPG', 'IMG_1798.JPG', 'IMG_1799.JPG',
  'IMG_1800.JPG', 'IMG_1801.JPG', 'IMG_1802.JPG', 'IMG_1803.JPG', 'IMG_1804.JPG',
  'IMG_1805.JPG', 'IMG_1806.JPG', 'IMG_1807.JPG', 'IMG_1808.JPG', 'IMG_1809.JPG',
  'IMG_1810.JPG', 'IMG_1811.JPG', 'IMG_1812.JPG', 'IMG_1813.JPG', 'IMG_1814.JPG',
  'IMG_1815.JPG', 'IMG_1816.JPG', 'IMG_1817.JPG', 'IMG_1818.JPG', 'IMG_1819.JPG',
  'IMG_1820.JPG', 'IMG_1821.JPG', 'IMG_1822.JPG', 'IMG_1823.JPG', 'IMG_1824.JPG',
  'IMG_1825.JPG', 'IMG_1826.JPG', 'IMG_1827.JPG', 'IMG_1828.JPG', 'IMG_1832.JPG',
  'IMG_1833.JPG', 'IMG_1834.JPG', 'IMG_1835.JPG', 'IMG_1836.JPG', 'IMG_1837.JPG',
  'IMG_1838.JPG', 'IMG_1839.JPG', 'IMG_1840.JPG', 'IMG_1841.JPG', 'IMG_1842.JPG',
  'IMG_1843.JPG', 'IMG_1844.JPG', 'IMG_1845.JPG', 'IMG_1846.JPG', 'IMG_1847.JPG',
  'IMG_1848.JPG', 'IMG_1849.JPG', 'IMG_1850.JPG', 'IMG_1851.JPG', 'IMG_1852.JPG',
  'IMG_1853.JPG', 'IMG_1854.JPG', 'IMG_1855.JPG', 'IMG_1856.JPG', 'IMG_1857.JPG',
  'IMG_1858.JPG', 'IMG_1859.JPG', 'IMG_1860.JPG', 'IMG_1861.JPG', 'IMG_1862.JPG',
  'IMG_1863.JPG', 'IMG_1864.JPG', 'IMG_1865.JPG', 'IMG_1866.JPG', 'IMG_1867.JPG',
  'IMG_1868.JPG', 'IMG_1869.JPG', 'IMG_1870.JPG', 'IMG_1871.JPG', 'IMG_1872.JPG',
  'IMG_1873.JPG', 'IMG_1874.JPG', 'IMG_1875.JPG', 'IMG_1876.JPG', 'IMG_1877.JPG',
  'IMG_1878.JPG', 'IMG_1879.JPG', 'IMG_1880.JPG', 'IMG_1881.JPG', 'IMG_1882.JPG',
  'IMG_1883.JPG', 'IMG_1884.JPG', 'IMG_1885.JPG', 'IMG_1886.JPG', 'IMG_1887.JPG',
  'IMG_1888.JPG', 'IMG_1889.JPG', 'IMG_1890.JPG', 'IMG_1891.JPG', 'IMG_1892.JPG',
  'IMG_1893.JPG', 'IMG_1894.JPG', 'IMG_1895.JPG', 'IMG_1896.JPG', 'IMG_1897.JPG',
  'IMG_1898.JPG', 'IMG_1899.JPG', 'IMG_1900.JPG', 'IMG_1901.JPG', 'IMG_1902.JPG',
  'IMG_1903.JPG', 'IMG_1904.JPG', 'IMG_1905.JPG', 'IMG_1906.JPG', 'IMG_1907.JPG',
  'IMG_1908.JPG', 'IMG_1909.JPG', 'IMG_1910.JPG', 'IMG_1911.JPG', 'IMG_1912.JPG',
  'IMG_1913.JPG', 'IMG_1914.JPG', 'IMG_1915.JPG', 'IMG_1916.JPG', 'IMG_1917.JPG',
  'IMG_1918.JPG', 'IMG_1919.JPG', 'IMG_1920.JPG', 'IMG_1921.JPG', 'IMG_1922.JPG',
  'IMG_1923.JPG', 'IMG_1924.JPG', 'IMG_1925.JPG', 'IMG_1926.JPG', 'IMG_1927.JPG',
  'IMG_1936.JPG', 'IMG_1937.JPG', 'IMG_1938.JPG', 'IMG_1939.JPG', 'IMG_1940.JPG',
  'IMG_1941.JPG', 'IMG_1942.JPG', 'IMG_1943.JPG', 'IMG_1945.JPG', 'IMG_1946.JPG',
  'IMG_1947.JPG', 'IMG_1948.JPG', 'IMG_1949.JPG', 'IMG_1950.JPG', 'IMG_1951.JPG',
  'IMG_1952.JPG', 'IMG_1953.JPG', 'IMG_1954.JPG', 'IMG_1955.JPG', 'IMG_1956.JPG',
  'IMG_1957.JPG', 'IMG_1958.JPG', 'IMG_1959.JPG', 'IMG_1960.JPG', 'IMG_1961.JPG',
  'IMG_1962.JPG', 'IMG_1963.JPG', 'IMG_1964.JPG', 'IMG_1965.JPG', 'IMG_1966.JPG',
  'IMG_1967.JPG', 'IMG_1968.JPG', 'IMG_1969.JPG', 'IMG_1970.JPG', 'IMG_1971.JPG',
  'IMG_1972.JPG', 'IMG_1973.JPG', 'IMG_1974.JPG', 'IMG_1975.JPG', 'IMG_1976.JPG',
  'IMG_1978.JPG', 'IMG_1979.JPG', 'IMG_1980.JPG', 'IMG_1981.JPG', 'IMG_1982.JPG',
  'IMG_1983.JPG', 'IMG_1984.JPG', 'IMG_1985_1.JPG', 'IMG_1985.JPG', 'IMG_1986_1.JPG',
  'IMG_1986.JPG', 'IMG_1987_1.JPG', 'IMG_1987.JPG', 'IMG_1988_1.JPG', 'IMG_1988.JPG',
  'IMG_1989_1.JPG', 'IMG_1989.JPG', 'IMG_1990_1.JPG', 'IMG_1990.JPG', 'IMG_1991_1.JPG',
  'IMG_1991.JPG', 'IMG_1992_1.JPG', 'IMG_1992.JPG', 'IMG_1993.JPG', 'IMG_1994.JPG',
  'IMG_1995.JPG', 'IMG_1996.JPG', 'IMG_1997.JPG', 'IMG_1998.JPG', 'IMG_1999.JPG',
  'IMG_2001.JPG', 'IMG_2002.JPG', 'IMG_2003.JPG', 'IMG_2004.JPG', 'IMG_2005.JPG',
  'IMG_2006.JPG', 'IMG_2007.JPG', 'IMG_2008.JPG', 'IMG_2009.JPG', 'IMG_2010.JPG',
  'IMG_2011.JPG', 'IMG_2012.JPG', 'IMG_2013.JPG', 'IMG_2014.JPG', 'IMG_2015.JPG',
  'IMG_2016.JPG', 'IMG_2017.JPG', 'IMG_2018.JPG', 'IMG_2019.JPG', 'IMG_2020.JPG',
  'IMG_2021.JPG', 'IMG_2022.JPG', 'IMG_2023.JPG', 'IMG_9643.JPG', 'IMG_9644.JPG',
  'IMG_9645.JPG', 'IMG_9646\n2.JPG', 'IMG_9647\n2.JPG', 'IMG_9648\n2.JPG', 'IMG_9649\n2.JPG',
  'IMG_9650\n2.JPG', 'IMG_9651\n2.JPG', 'IMG_9652\n2.JPG', 'IMG_9653\n2.JPG', 'IMG_9654\n2.JPG',
  'IMG_9655\n2.JPG', 'IMG_9656\n2.JPG', 'IMG_9657.JPG', 'IMG_9658.JPG', 'IMG_9659.JPG',
  'IMG_9660.JPG', 'IMG_9661.JPG', 'IMG_9662.JPG', 'IMG_9663.JPG', 'IMG_9664.JPG',
  'IMG_9665.JPG', 'IMG_9666.JPG', 'IMG_9667.JPG', 'IMG_9668.JPG', 'IMG_9669.JPG',
  'IMG_9670.JPG', 'IMG_9671.JPG', 'IMG_9672.JPG', 'IMG_9673.JPG', 'IMG_9674.JPG',
  'IMG_9675.JPG', 'IMG_9676.JPG', 'IMG_9677.JPG', 'IMG_9678.JPG', 'IMG_9679.JPG',
  'IMG_9680.JPG', 'IMG_9681.JPG', 'IMG_9682.JPG', 'IMG_9683.JPG', 'IMG_9684.JPG',
  'IMG_9685.JPG', 'IMG_9686.JPG', 'IMG_9687.JPG', 'IMG_9688.JPG', 'IMG_9689.JPG',
  'IMG_9690.JPG', 'IMG_9691.JPG', 'IMG_9692.JPG', 'IMG_9693.JPG', 'IMG_9694.JPG',
  'IMG_9695.JPG', 'IMG_9696.JPG', 'IMG_9697.JPG', 'IMG_9698.JPG', 'IMG_9699.JPG',
  'IMG_9700.JPG', 'IMG_9701.JPG', 'IMG_9702.JPG', 'IMG_9703.JPG', 'IMG_9704.JPG',
  'IMG_9705.JPG', 'IMG_9706.JPG', 'IMG_9707.JPG', 'IMG_9708.JPG', 'IMG_9709.JPG',
  'IMG_9710.JPG', 'IMG_9711.JPG', 'IMG_9712.JPG', 'IMG_9713.JPG', 'IMG_9714.JPG',
  'IMG_9715.JPG', 'IMG_9716.JPG', 'IMG_9717.JPG', 'IMG_9718.JPG', 'IMG_9719.JPG',
  'IMG_9720.JPG', 'IMG_9721.JPG', 'IMG_9722.JPG', 'IMG_9723.JPG', 'IMG_9724.JPG',
  'IMG_9725.JPG', 'IMG_9726.JPG', 'IMG_9727.JPG', 'IMG_9728.JPG', 'IMG_9729.JPG',
  'IMG_9730.JPG', 'IMG_9731.JPG', 'IMG_9732.JPG', 'IMG_9733.JPG', 'IMG_9734.JPG',
  'IMG_9735.JPG', 'IMG_9736.JPG', 'IMG_9737.JPG', 'IMG_9738.JPG'
];

function Lightbox({ photo, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '3rem',
          color: 'white',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 20px',
          zIndex: 10000,
        }}
      >
        &#8249;
      </button>
      <img
        src={`/2026_photos/${photo}`}
        alt={photo}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
        }}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '3rem',
          color: 'white',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px 20px',
          zIndex: 10000,
        }}
      >
        &#8250;
      </button>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '2rem',
          color: 'white',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
          zIndex: 10000,
        }}
      >
        &times;
      </button>
    </div>
  );
}

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  return (
    <Layout
      title="WMAC 2026 Photo Gallery"
      description="Photos from the WMAC 2026 Workshop"
    >
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            WMAC 2026 Photo Gallery
          </h1>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#4c566a', marginBottom: '2rem' }}>
            {photos.length} photos from the workshop
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1rem',
              padding: '1rem',
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => openLightbox(photo, index)}
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  aspectRatio: '1',
                  backgroundColor: '#f0f0f0',
                }}
              >
                <img
                  src={`/2026_photos/${photo}`}
                  alt={`WMAC 2026 Photo ${index + 1}`}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={closeLightbox}
          onNext={nextPhoto}
          onPrev={prevPhoto}
        />
      )}
    </Layout>
  );
}
