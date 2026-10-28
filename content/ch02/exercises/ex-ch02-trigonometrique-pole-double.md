---
id: ex-ch02-trigonometrique-pole-double
type: exercise
chapters: [2]
title: Une intégrale trigonométrique et un pôle double
source: "Classique (intégrales rationnelles en cos et sin ; voir par ex. Stein–Shakarchi, ch. 3)"
difficulty: 1
time: 15
tools: [ch02-formule-residus-pratique, ch02-formule-residus, ch02-laurent-developpement, ch02-residu-def, ch01-integrale-sur-cercle]
---
## Énoncé

On considère
$$
I=\int_0^{2\pi}\frac{d\theta}{(2+\cos\theta)^2}.
$$
1. Montrer que
$$
I=\frac{4}{i}\int_{C(0,1)}\frac{z}{(z^2+4z+1)^2}\,dz,
$$
où $C(0,1)$ est le cercle unité parcouru une fois dans le sens trigonométrique.
2. Déterminer les pôles de $R(z)=\dfrac{z}{(z^2+4z+1)^2}$, leur multiplicité, ceux qui sont dans le disque $D(0,1)$, et le résidu de $R$ en chacun de ces derniers.
3. En déduire la valeur de $I$.

## Indices

### Indice 1
Une intégrale sur $[0,2\pi]$ d'une fraction rationnelle en $\cos\theta$ : en posant $z=e^{i\theta}$, $\theta\mapsto z$ décrit le cercle unité. Que deviennent $\cos\theta$ et $d\theta$ ?

### Indice 2
Sur le cercle, $\cos\theta=\frac12\left(z+\frac1z\right)$ et $dz=ie^{i\theta}d\theta$. Ensuite, formule des résidus pour le bord du disque $U=D(0,1)$ (forme pratique (II.6.1)) : vérifier qu'aucun pôle n'est sur le cercle.

### Indice 3
$z^2+4z+1=(z-\alpha)(z-\beta)$ avec $\alpha=-2+\sqrt3$ et $\beta=-2-\sqrt3$ ; seul $\alpha$ est dans le disque, et c'est un pôle **double** : le résidu est le coefficient de $(z-\alpha)^{-1}$, c'est-à-dire $h'(\alpha)$ où $h(z)=(z-\alpha)^2R(z)$.

## Corrigé

**1.** Le cercle $C(0,1)$ parcouru dans le sens direct est le lacet $\theta\mapsto e^{i\theta}$, $\theta\in[0,2\pi]$, et pour $F$ continue sur un voisinage du cercle ([[ch01-integrale-sur-cercle]])
$$
\int_{C(0,1)}F(z)\,dz=i\int_0^{2\pi}F(e^{i\theta})\,e^{i\theta}\,d\theta .
$$
Pour $z=e^{i\theta}$ on a $\cos\theta=\frac12(z+\bar z)=\frac12\left(z+\frac1z\right)=\frac{z^2+1}{2z}$, donc
$$
2+\cos\theta=\frac{z^2+4z+1}{2z},\qquad \frac{1}{(2+\cos\theta)^2}=\frac{4z^2}{(z^2+4z+1)^2}.
$$
Le trinôme $z^2+4z+1$ a pour racines $\alpha=-2+\sqrt3\approx-0{,}27$ et $\beta=-2-\sqrt3\approx-3{,}73$, de modules différents de $1$ : il ne s'annule pas sur le cercle et $F(z)=\frac4i\,\frac{z}{(z^2+4z+1)^2}$ est continue (même holomorphe) au voisinage du cercle. Alors
$$
i\,F(e^{i\theta})\,e^{i\theta}=4\,\frac{e^{2i\theta}}{(e^{2i\theta}+4e^{i\theta}+1)^2}=\frac{4z^2}{(z^2+4z+1)^2}\Big|_{z=e^{i\theta}}=\frac{1}{(2+\cos\theta)^2},
$$
d'où $I=\int_{C(0,1)}F(z)\,dz=\frac4i\int_{C(0,1)}R(z)\,dz$.

**2.** $R(z)=\dfrac{z}{(z-\alpha)^2(z-\beta)^2}$ est une fraction rationnelle, donc holomorphe sur $\C\setminus\{\alpha,\beta\}$ et méromorphe sur $\C$. Le numérateur ne s'annule ni en $\alpha$ ni en $\beta$ (ils sont non nuls), donc $\alpha$ et $\beta$ sont des pôles de multiplicité exactement $2$ ([[ch02-pole-meromorphe-def]] : $R=(z-\alpha)^{-2}h$ avec $h$ holomorphe en $\alpha$ et $h(\alpha)\neq0$). Comme $|\alpha|=2-\sqrt3<1$ et $|\beta|=2+\sqrt3>1$, seul $\alpha$ est dans $D(0,1)$.

Résidu en $\alpha$. Posons $h(z)=(z-\alpha)^2R(z)=\dfrac{z}{(z-\beta)^2}$, holomorphe sur $D(\alpha,|\alpha-\beta|)$. Son développement de Taylor $h(z)=h(\alpha)+h'(\alpha)(z-\alpha)+(z-\alpha)^2k(z)$ ($k$ holomorphe) donne le développement de Laurent ([[ch02-laurent-developpement]])
$$
R(z)=\frac{h(\alpha)}{(z-\alpha)^2}+\frac{h'(\alpha)}{z-\alpha}+k(z),
$$
donc, par définition du résidu ([[ch02-residu-def]]), $\mathrm{res}_\alpha(R)=h'(\alpha)$. On calcule
$$
h'(z)=\frac{(z-\beta)^2-2z(z-\beta)}{(z-\beta)^4}=\frac{-(z+\beta)}{(z-\beta)^3},
\qquad
h'(\alpha)=\frac{-(\alpha+\beta)}{(\alpha-\beta)^3}=\frac{4}{(2\sqrt3)^3}=\frac{4}{24\sqrt3}=\frac{1}{6\sqrt3},
$$
car $\alpha+\beta=-4$ et $\alpha-\beta=2\sqrt3$.

**3.** On applique la formule des résidus sous sa forme pratique ([[ch02-formule-residus-pratique]], cas particulier de [[ch02-formule-residus]]) : $U=D(0,1)$ est un ouvert connexe borné dont le bord est le lacet simple $C(0,1)$ orienté dans le sens direct ; $\Omega=\C$ est simplement connexe (étoilé) et contient $\bar U$ ; $R$ est méromorphe sur $\C$ et n'a pas de pôle sur $C(0,1)$ ; l'ensemble des pôles dans $U$ est $S=\{\alpha\}$ (d'indice $1$, [[ch02-indice-cercle]]). Donc
$$
I=\frac4i\cdot 2i\pi\,\mathrm{res}_\alpha(R)=8\pi\cdot\frac{1}{6\sqrt3}=\frac{4\pi}{3\sqrt3}=\frac{4\sqrt3\,\pi}{9}\approx 2{,}418.
$$
Contrôle de vraisemblance : l'intégrande est compris entre $1/9$ et $1$, donc $I\in[2\pi/9,2\pi]$ ; c'est le cas (valeur aussi vérifiée numériquement).

## Pièges et variantes

* Oublier le facteur $d\theta=\dfrac{dz}{iz}$ : on obtient alors une fonction avec un pôle parasite en $0$ (ou sans le bon facteur $z$) et un résultat faux.
* Calculer le résidu en un pôle double par $\lim_{z\to\alpha}(z-\alpha)R(z)$ : cette limite est infinie. La formule « $\lim (z-z_0)F$ » ne vaut que pour un pôle **simple** ; pour un pôle d'ordre $2$, le résidu est $\frac{d}{dz}\big[(z-\alpha)^2R(z)\big]_{z=\alpha}$.
* Compter le pôle $\beta$ extérieur au disque : son indice par rapport à $C(0,1)$ est $0$, il ne contribue pas.
* Ne pas vérifier qu'aucun pôle n'est **sur** le cercle : ici $|\alpha|,|\beta|\ne1$ ; pour $\int_0^{2\pi}\frac{d\theta}{(1+\cos\theta)^2}$ les deux pôles se confondent en $-1$, sur le cercle, et l'intégrale diverge.
* Variante : pour $a>1$, le même calcul donne $\displaystyle\int_0^{2\pi}\frac{d\theta}{(a+\cos\theta)^2}=\frac{2\pi a}{(a^2-1)^{3/2}}$. On peut aussi l'obtenir en calculant d'abord (pôle simple) $\int_0^{2\pi}\frac{d\theta}{a+\cos\theta}=\frac{2\pi}{\sqrt{a^2-1}}$, puis en dérivant par rapport à $a$ sous le signe intégrale.
