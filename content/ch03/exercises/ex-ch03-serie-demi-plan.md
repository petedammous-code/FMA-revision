---
id: ex-ch03-serie-demi-plan
type: exercise
chapters: [3]
title: Une série de Fourier holomorphe dans le demi-plan supérieur
source: Inventé
difficulty: 1
time: 15
tools: [ch03-weierstrass-series, ch03-convergence-normale-definition, ch03-weierstrass, ch02-logarithme-determination-principale-def]
---
## Énoncé

On note $H=\{z\in\C : \Im(z)>0\}$ le demi-plan supérieur et $\mathrm{Log}$ la détermination principale du logarithme sur $\C\setminus\R_-$ (l'unique primitive de $1/z$ sur $\C\setminus\R_-$ qui s'annule en $1$). Pour $z\in H$, on pose
$$
F(z)=\sum_{n\ge1}\frac{e^{inz}}{n^2}.
$$
1. Montrer que $F$ est bien définie et holomorphe sur $H$, et que pour tout $z\in H$
$$
F'(z)=i\sum_{n\ge1}\frac{e^{inz}}{n},\qquad F''(z)=-\sum_{n\ge1}e^{inz}.
$$
2. Calculer $F''(z)$ sous forme close, puis montrer que $F'(z)=-i\,\mathrm{Log}\bigl(1-e^{iz}\bigr)$ pour tout $z\in H$.
3. Parmi les trois séries $\sum_n e^{inz}/n^2$, $\sum_n e^{inz}/n$ et $\sum_n e^{inz}$, lesquelles convergent **uniformément sur $H$ tout entier** ? Commenter au regard de la question 1.

## Indices

### Indice 1
Une série de fonctions holomorphes : quel mode de convergence faut-il établir pour obtenir à la fois l'holomorphie de la somme et la dérivation terme à terme ? Que vaut $|e^{inz}|$ quand $z=x+iy$ ?

### Indice 2
$|e^{inz}|=e^{-ny}$. Sur le demi-plan $H_\delta=\{\Im(z)>\delta\}$ ($\delta>0$), les trois séries convergent normalement (majorants $e^{-n\delta}/n^k$). Tout point de $H$ possède un tel voisinage : le théorème de Weierstrass pour les séries (Théorème III.1.5) s'applique, deux fois.

### Indice 3
Avec $q=e^{iz}$, $|q|<1$ : série géométrique. Pour $F'$, comparer les dérivées de $F'$ et de $-i\,\mathrm{Log}(1-e^{iz})$ sur l'ouvert **connexe** $H$, puis fixer la constante en faisant $z=iy$, $y\to+\infty$. Pour la question 3, une série qui converge uniformément a un terme général qui tend vers $0$ uniformément ; et une limite uniforme de fonctions bornées est bornée.

## Corrigé

**1.** Notons $u_n(z)=e^{inz}/n^2$ ; chaque $u_n$ est holomorphe sur $H$ (composée de $z\mapsto inz$ et de $\exp$). Pour $z=x+iy\in H$, $|e^{inz}|=|e^{inx}|\,e^{-ny}=e^{-ny}$.

*Convergence locale normale.* Soit $z_0\in H$ et $\delta=\Im(z_0)/2>0$. Le demi-plan ouvert $H_\delta=\{\Im(z)>\delta\}$ est un voisinage de $z_0$ contenu dans $H$, et pour $k\in\{0,1,2\}$ :
$$
\sup_{z\in H_\delta}\Bigl|\frac{e^{inz}}{n^k}\Bigr|\le \frac{e^{-n\delta}}{n^k}\le e^{-n\delta},\qquad \sum_{n\ge1}e^{-n\delta}<\infty .
$$
Donc les trois séries $\sum e^{inz}/n^2$, $\sum e^{inz}/n$, $\sum e^{inz}$ convergent normalement sur un voisinage de chaque point de $H$, c'est-à-dire localement normalement sur $H$ ([[ch03-convergence-normale-definition]]).

*Théorème de Weierstrass pour les séries* ([[ch03-weierstrass-series]], poly, Théorème III.1.5, p. 61). Hypothèses : les $u_n$ sont holomorphes sur l'ouvert $H$ et $\sum u_n$ converge localement normalement. Donc $F=\sum u_n$ est holomorphe sur $H$ et
$$
F'(z)=\sum_{n\ge1}u_n'(z)=\sum_{n\ge1}\frac{in\,e^{inz}}{n^2}=i\sum_{n\ge1}\frac{e^{inz}}{n}.
$$
On applique une seconde fois le même théorème à la série $\sum u_n'$, de termes holomorphes et localement normalement convergente (vu plus haut) : $F''=\sum u_n''=\sum i\cdot in\,e^{inz}/n=-\sum e^{inz}$.

**2.** Posons $q=e^{iz}$ ; pour $z\in H$, $|q|=e^{-y}<1$, donc la série géométrique donne
$$
F''(z)=-\sum_{n\ge1}q^n=-\frac{q}{1-q}=-\frac{e^{iz}}{1-e^{iz}} .
$$
*Définition de $L(z)=-i\,\mathrm{Log}(1-e^{iz})$.* Comme $|e^{iz}|<1$, $1-e^{iz}\in D(1,1)\subset\{\Re(w)>0\}\subset\C\setminus\R_-$ : $L$ est bien définie et holomorphe sur $H$ (composée), et puisque $\mathrm{Log}'(w)=1/w$,
$$
L'(z)=-i\cdot\frac{-ie^{iz}}{1-e^{iz}}=i^2\,\frac{e^{iz}}{1-e^{iz}}=-\frac{e^{iz}}{1-e^{iz}}=F''(z).
$$
Ainsi $(F'-L)'=0$ sur $H$ ; $H$ est convexe donc connexe, et $F'-L$ est une constante $c$.

*Calcul de $c$.* Prenons $z=iy$ avec $y\ge1$ : $|F'(iy)|\le\sum_{n\ge1}e^{-ny}/n\le\sum_{n\ge1}e^{-ny}=\frac{e^{-y}}{1-e^{-y}}\xrightarrow[y\to+\infty]{}0$, et $L(iy)=-i\,\mathrm{Log}(1-e^{-y})\to -i\,\mathrm{Log}(1)=0$ par continuité de $\mathrm{Log}$ en $1$. Donc $c=0$ et
$$
F'(z)=-i\,\mathrm{Log}\bigl(1-e^{iz}\bigr)\qquad(z\in H).
$$

**3.**
* $\sum e^{inz}/n^2$ : $\sup_H|e^{inz}/n^2|=1/n^2$ (sup approché quand $y\to0^+$), et $\sum1/n^2<\infty$ : convergence **normale, donc uniforme, sur $H$ entier** (et même sur $\bar H$).
* $\sum e^{inz}$ : si elle convergeait uniformément sur $H$, son terme général $u_n''=S_n-S_{n-1}$ (différence de deux sommes partielles) tendrait vers $0$ uniformément sur $H$ ; or $\sup_H|e^{inz}|=\sup_{y>0}e^{-ny}=1$. **Pas de convergence uniforme sur $H$.**
* $\sum e^{inz}/n$ : le terme général tend uniformément vers $0$ ($\sup_H=1/n$), mais la série ne converge pas uniformément sur $H$. En effet chaque somme partielle $T_N=i\sum_{n\le N}e^{inz}/n$ est bornée sur $H$ (par $\sum_{n\le N}1/n$) ; une limite uniforme de fonctions bornées est bornée ; or la limite $F'(z)=-i\,\mathrm{Log}(1-e^{iz})$ n'est pas bornée sur $H$ : pour $z=iy$, $|F'(iy)|\ge|\log(1-e^{-y})|\to+\infty$ quand $y\to0^+$.

*Commentaire.* Le théorème de Weierstrass ([[ch03-weierstrass]]) ne promet que la convergence **localement** uniforme des dérivées : ici la série de $F$ converge uniformément sur $H$, mais celles de $F'$ et $F''$ seulement sur les $H_\delta$. Dériver « coûte de la place » : les estimées de Cauchy contrôlent $f^{(k)}$ en $z$ par $\sup|f|$ sur un cercle de rayon $r$ autour de $z$, avec un facteur $r^{-k}$, et ce rayon tend vers $0$ quand $z$ s'approche de l'axe réel.

## Pièges et variantes

* Écrire « $\sum e^{inz}$ converge normalement sur $H$ » : faux, $\sup_H|e^{inz}|=1$. Il faut **se placer sur $H_\delta$** puis conclure par le caractère local de la convergence.
* Oublier la connexité de $H$ quand on passe de $(F'-L)'=0$ à $F'-L$ constante ; oublier de **déterminer la constante**.
* Utiliser $\mathrm{Log}$ sans vérifier que $1-e^{iz}$ évite la coupure $\R_-$ : c'est ici que sert $|e^{iz}|<1$.
* Variante : on peut aussi conclure la question 2 avec le développement $\mathrm{Log}(1-q)=-\sum_{n\ge1}q^n/n$ pour $|q|<1$ (les deux membres sont holomorphes sur $D(0,1)$, de même dérivée $-1/(1-q)$ et nuls en $0$).
* Variante : $F$ se prolonge continûment à $\bar H$ (convergence normale sur $\bar H$) mais pas $F'$, qui explose aux points de $2\pi\Z$. Sur l'axe réel, $\Re F(x)=\sum\cos(nx)/n^2$ ; en faisant tendre $y\to0^+$ dans la question 2 (pour $0<x<2\pi$, $-i\,\mathrm{Log}(1-e^{ix})=\frac{x-\pi}{2}-i\log\bigl(2\sin\frac x2\bigr)$) puis en intégrant (ce passage au bord demande une justification), on obtient $\Re F(x)=\frac{\pi^2}{6}-\frac{\pi x}{2}+\frac{x^2}{4}$ sur $[0,2\pi]$.
