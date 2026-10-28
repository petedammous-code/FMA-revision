---
id: ch02-etoile-simplement-connexe
type: proposition
chapter: 2
title: Un ouvert étoilé est simplement connexe
ref: Proposition II.1.5
page: 37
importance: 2
depends: [ch02-homotopie-simplement-connexe, ch02-ouvert-etoile-def]
tags: [etoile, simplement-connexe, homotopie, contraction]
---
## Intuition

> 💡 Si tout $\Omega$ est visible depuis $\omega$, on contracte n'importe quel lacet sur $\omega$ en faisant glisser **chaque point du lacet le long du segment qui le relie à $\omega$**, tous à la même vitesse. À l'instant $s$, le lacet est l'image de $\gamma_0$ par l'homothétie de centre $\omega$ et de rapport $1-s$ : il rétrécit jusqu'au point $\omega$ sans jamais quitter $\Omega$, précisément parce que les segments $[\omega,\gamma_0(t)]$ sont dans $\Omega$.

Rappels : $\Omega$ est **étoilé en $\omega$** si $[\omega,z]\subset\Omega$ pour tout $z\in\Omega$ ([[ch02-ouvert-etoile-def]]) ; $\Omega$ est **simplement connexe** s'il est connexe et si tout lacet de $\Omega$ est homotope, par une homotopie de lacets, à un lacet constant ([[ch02-homotopie-simplement-connexe]]).

C'est la source de presque tous les ouverts simplement connexes du cours : disques, demi-plans, bandes, $\C$, plan coupé $\C\setminus\R_-$.

## Énoncé

**Proposition (poly, Proposition II.1.5, p. 37).** Un ouvert étoilé est simplement connexe.

## Hypothèses

### H1 — $\Omega$ est étoilé (en un point $\omega$)

**Rôle.** C'est l'hypothèse qui garantit que l'homotopie $\gamma(s,t)=s\,\omega+(1-s)\gamma_0(t)$ reste dans $\Omega$ : le point $\gamma(s,t)$ est sur le segment $[\omega,\gamma_0(t)]$. Elle donne aussi la connexité (connexité par arcs via $\omega$).

**Si on la retire.** $\C\setminus\{0\}$ n'est étoilé en aucun point et n'est pas simplement connexe (le cercle unité n'est pas homotope à un lacet constant dans $\C\setminus\{0\}$, car $\int_{C(0,1)}dz/z=2i\pi\ne0$ contredirait [[ch02-invariance-homotopie-integrale]]). Mais attention, la réciproque de la proposition est fausse : la demi-couronne $\{1<|z|<2,\ \Im(z)>0\}$ est simplement connexe sans être étoilée ([[ch02-ouvert-etoile-def]], exemple 4). L'hypothèse est donc suffisante, non nécessaire.

### H2 — $\Omega$ est un ouvert

**Rôle.** La notion « simplement connexe » du poly est définie pour les ouverts ; l'hypothèse n'intervient pas dans le calcul.

**Si on la retire.** La conclusion reste vraie mot pour mot pour toute partie étoilée de $\C$ (la preuve n'utilise que la propriété des segments), mais le cours n'en a pas l'usage.

## Idée de la preuve

Pour un lacet $\gamma_0$, on pose $\gamma(s,t)=s\,\omega+(1-s)\gamma_0(t)$ (homothétie de centre $\omega$ et de rapport $1-s$) et on vérifie les quatre points de la définition d'une homotopie de lacets entre $\gamma_0$ et le lacet constant $\omega$.

## Preuve

Supposons $\Omega$ étoilé en $\omega$.

*Connexité.* Pour $z_1,z_2\in\Omega$, le chemin $[z_1,\omega]\vee[\omega,z_2]$ est contenu dans $\Omega$ par hypothèse : $\Omega$ est connexe par arcs, donc connexe.

*Contraction des lacets.* Soit $\gamma_0:[0,1]\to\Omega$ un lacet de $\Omega$. Posons, pour $(s,t)\in[0,1]^2$,
$$
\gamma(s,t):=s\,\omega+(1-s)\,\gamma_0(t).
$$
Vérifions que $\gamma$ est une homotopie de lacets entre $\gamma_0$ et le lacet constant de valeur $\omega$ ([[ch02-homotopie-simplement-connexe]]) :

1. *Continuité :* $\gamma$ est continue sur $[0,1]^2$ comme somme de produits de fonctions continues ($\gamma_0$ est continue).
2. *Valeurs dans $\Omega$ :* pour tout $(s,t)$, $\gamma(s,t)=(1-\lambda)\omega+\lambda\gamma_0(t)$ avec $\lambda=1-s\in[0,1]$, donc $\gamma(s,t)$ appartient au segment $[\omega,\gamma_0(t)]$, qui est contenu dans $\Omega$ car $\Omega$ est étoilé en $\omega$ et $\gamma_0(t)\in\Omega$.
3. *Extrémités :* $\gamma(0,t)=\gamma_0(t)$ et $\gamma(1,t)=\omega$ pour tout $t$.
4. *Condition de lacet :* $\gamma(s,0)=s\omega+(1-s)\gamma_0(0)=s\omega+(1-s)\gamma_0(1)=\gamma(s,1)$ puisque $\gamma_0(0)=\gamma_0(1)$.

Le lacet constant $t\mapsto\omega$ est bien un lacet ($C^1$, fermé). Ainsi tout lacet de $\Omega$ est homotope à un lacet constant : $\Omega$ est simplement connexe. $\square$

*Variante du poly :* le poly se contente de « on vérifie que $\gamma$ est une homotopie de lacets » ; la vérification de la connexité, implicite dans le poly, est ajoutée ici.

## Preuve à trous

Supposons $\Omega$ étoilé en $\omega$. Il est connexe car <trou indice="passer par $\omega$">deux points quelconques $z_1,z_2$ sont reliés par le chemin $[z_1,\omega]\vee[\omega,z_2]\subset\Omega$ (connexe par arcs)</trou>. Soit $\gamma_0$ un lacet de $\Omega$ ; on pose <trou indice="homothétie de centre $\omega$ et de rapport $1-s$">$\gamma(s,t):=s\,\omega+(1-s)\gamma_0(t)$</trou>. Elle est continue, vaut $\gamma_0(t)$ en $s=0$ et $\omega$ en $s=1$, et vérifie $\gamma(s,0)=\gamma(s,1)$ car $\gamma_0(0)=\gamma_0(1)$. Elle est à valeurs dans $\Omega$ car <trou indice="où se trouve $\gamma(s,t)$ ?">$\gamma(s,t)$ appartient au segment $[\omega,\gamma_0(t)]$, contenu dans $\Omega$ par hypothèse d'étoilement</trou>. C'est donc une homotopie de lacets entre $\gamma_0$ et le lacet constant $\omega$ : $\Omega$ est simplement connexe. $\square$

## Exemples

1. **Le disque $D(0,1)$ et le cercle $\gamma_0(t)=\tfrac12e^{2i\pi t}$.** Étoilé en $\omega=0$ : l'homotopie est $\gamma(s,t)=(1-s)\tfrac12e^{2i\pi t}$, une famille de cercles concentriques de rayon $\tfrac12(1-s)$ qui se referment sur $0$. On vérifie $|\gamma(s,t)|\le\tfrac12<1$.

2. **Le plan coupé $\C\setminus\R_-$**, étoilé en $1$ ([[ch02-ouvert-etoile-def]]), est simplement connexe : pour le lacet $\gamma_0(t)=2+e^{2i\pi t}$ (cercle de centre $2$ et de rayon $1$), $\gamma(s,t)=s+(1-s)(2+e^{2i\pi t})=(2-s)+(1-s)e^{2i\pi t}$ : cercles de centre $2-s$ et de rayon $1-s$, de partie réelle $\ge(2-s)-(1-s)=1>0$, donc jamais dans $\R_-$. Conséquence majeure : $1/z$ y admet une primitive, le logarithme principal ([[ch02-primitive-simplement-connexe]], [[ch02-logarithme-determination-principale-def]]).

3. **Conséquence pour les intégrales.** Sur un ouvert étoilé, toute intégrale d'une fonction holomorphe sur un lacet est nulle ([[ch02-cauchy-simplement-connexe]]) : par exemple $\int_\gamma e^{z^2}dz=0$ pour tout lacet $\gamma$ de $\C$, et $\int_\gamma \frac{dz}{z}=0$ pour tout lacet $\gamma$ contenu dans $\{\Re(z)>0\}$ (demi-plan convexe sur lequel $1/z$ est holomorphe).

## Pièges

* > ⚠️ La réciproque est **fausse** : simplement connexe n'implique pas étoilé (demi-couronne $\{1<|z|<2,\Im(z)>0\}$). On ne peut pas conclure « non étoilé donc non simplement connexe ».
* Il faut un **même** point $\omega$ pour tous les $z$ : la couronne $\{1<|z|<2\}$ est « localement étoilée » (chaque point voit un petit disque) mais elle n'est pas étoilée, et elle n'est pas simplement connexe.
* L'homotopie $s\omega+(1-s)\gamma_0(t)$ ne marche que grâce aux segments $[\omega,\gamma_0(t)]$ ; dans $\C\setminus\{0\}$ avec $\omega=1$ et $\gamma_0(t)=e^{2i\pi t}$, elle passe par $0$ (pour $s=\tfrac12$, $t=\tfrac12$ : $\tfrac12-\tfrac12=0$).
* Ne pas oublier que « simplement connexe » exige « connexe » : c'est automatique ici (connexité par arcs via $\omega$), mais il faut le dire.
