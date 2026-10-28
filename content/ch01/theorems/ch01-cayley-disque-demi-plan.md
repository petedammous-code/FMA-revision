---
id: ch01-cayley-disque-demi-plan
type: proposition
chapter: 1
title: "Transformation de Cayley : $z\mapsto i\frac{1-z}{1+z}$ est un biholomorphisme de $D$ sur $H$"
ref: Exemple I.4.3
page: 13
importance: 2
depends: [ch01-def-biholomorphisme, ch01-polynomes-fractions-rationnelles]
tags: [cayley, disque, demi-plan, biholomorphisme, homographie, transformation-conforme]
---
## Intuition

> 💡 Le disque unité $D$ est borné, le demi-plan supérieur $H$ ne l'est pas ; pourtant, pour l'analyse complexe, c'est **le même ouvert**. La transformation de Cayley « ouvre » le disque en envoyant le point $-1$ du bord à l'infini : le cercle unité se déplie sur la droite réelle, et l'intérieur du disque remplit le demi-plan supérieur. Le centre $0$ va sur $i$.

Pourquoi c'est utile : on peut transporter tout problème posé sur $H$ en un problème sur $D$ (et réciproquement) par composition. Par exemple, les automorphismes de $H$ se déduisent de ceux de $D$ ([[ch01-automorphismes-disque]]), et c'est un premier exemple de transformation conforme (chapitre IV, théorème de Riemann [[ch03-riemann-representation-conforme]]).

Notations : $D=D(0,1)=\{z\in\C:|z|<1\}$ (disque unité **ouvert**), $H=\{z\in\C:\Im(z)>0\}$ (**demi-plan de Poincaré**). Un **biholomorphisme** est une bijection holomorphe entre deux ouverts dont la réciproque est holomorphe ([[ch01-def-biholomorphisme]]).

## Énoncé

**Proposition (poly, Exemple I.4.3, p. 13).** Soit $D=D(0,1)$ le disque unité et $H=\{z\in\C\mid\Im(z)>0\}$ le demi-plan de Poincaré. Alors
$$
h:z\mapsto i\,\frac{1-z}{1+z}
$$
est un biholomorphisme de $D$ sur $H$, de réciproque
$$
h^{-1}:w\mapsto\frac{i-w}{i+w}.
$$
(La réciproque et la preuve ne sont pas écrites dans le poly.)

## Hypothèses

### H1 — Ensemble de départ : le disque **ouvert** $D$

**Rôle.** $h$ est une fraction rationnelle de pôle $-1$ ; elle est holomorphe sur $\C\setminus\{-1\}$, qui contient $D$. La condition $|z|<1$ est exactement celle qui donne $\Im h(z)>0$ (formule clé de la preuve).

**Si on la retire.** Sur le disque fermé, $h$ n'est pas définie en $-1$ ; sur le cercle unité privé de $-1$, $h$ est **réelle** : pour $z=e^{i\theta}$, $\theta\in\,]-\pi,\pi[$,
$$
h(e^{i\theta})=i\,\frac{e^{-i\theta/2}-e^{i\theta/2}}{e^{-i\theta/2}+e^{i\theta/2}}=i\,\frac{-2i\sin(\theta/2)}{2\cos(\theta/2)}=\tan\frac\theta2\in\R ,
$$
et pour $|z|>1$ on a $\Im h(z)<0$. Ainsi $h$ est une bijection de $\C\setminus\{-1\}$ sur $\C\setminus\{-i\}$ qui envoie $D$ sur $H$, le cercle privé de $-1$ sur $\R$, et l'extérieur du disque sur le demi-plan inférieur : seul le disque **ouvert** va sur $H$.

### H2 — Ensemble d'arrivée : le demi-plan **ouvert** $H$

**Rôle.** C'est l'image exacte de $D$ ; il faut le vérifier dans les deux sens (inclusion $h(D)\subset H$ et surjectivité, via la réciproque).

**Si on la retire.** Si l'on remplace $H$ par $\{\Im(w)\ge0\}$ ou par $\C$, $h$ n'est plus surjective : par exemple $0=h(1)$ et $1=h(i)$ ont leurs antécédents sur le cercle, pas dans $D$.

## Idée de la preuve

On calcule $\Im h(z)=\frac{1-|z|^2}{|1+z|^2}$, ce qui donne $h(D)\subset H$. On résout $w=h(z)$ en $z=\frac{i-w}{i+w}$ et l'on vérifie que cette fraction rationnelle envoie $H$ dans $D$ et inverse $h$ des deux côtés.

## Preuve

*Preuve non écrite dans le poly.*

**Holomorphie.** $h$ et $g:w\mapsto\frac{i-w}{i+w}$ sont des fractions rationnelles, holomorphes respectivement sur $\C\setminus\{-1\}\supset D$ et $\C\setminus\{-i\}\supset H$ ([[ch01-polynomes-fractions-rationnelles]]).

**$h(D)\subset H$.** Pour $z\neq-1$, multiplions numérateur et dénominateur par $\overline{1+z}=1+\bar z$ :
$$
h(z)=i\,\frac{(1-z)(1+\bar z)}{|1+z|^2}=i\,\frac{1-|z|^2+\bar z-z}{|1+z|^2}=i\,\frac{1-|z|^2-2i\Im(z)}{|1+z|^2}=\frac{2\Im(z)}{|1+z|^2}+i\,\frac{1-|z|^2}{|1+z|^2}.
$$
Donc $\Im h(z)=\dfrac{1-|z|^2}{|1+z|^2}$, qui est $>0$ dès que $|z|<1$.

**$g(H)\subset D$.** Pour $w=a+ib$ avec $b>0$ : $|i-w|^2=a^2+(1-b)^2$ et $|i+w|^2=a^2+(1+b)^2$, donc $|i+w|^2-|i-w|^2=4b>0$, d'où $|g(w)|<1$.

**$g$ et $h$ sont réciproques.** Pour $w\in H$,
$$
1-g(w)=\frac{2w}{i+w},\quad1+g(w)=\frac{2i}{i+w},\quad\text{donc}\quad h(g(w))=i\,\frac{2w}{2i}=w .
$$
Pour $z\in D$,
$$
i-h(z)=\frac{i(1+z)-i(1-z)}{1+z}=\frac{2iz}{1+z},\quad i+h(z)=\frac{2i}{1+z},\quad\text{donc}\quad g(h(z))=z .
$$
Ainsi $h:D\to H$ est bijective, de réciproque $g$ holomorphe sur $H$ : c'est un biholomorphisme de $D$ sur $H$ ([[ch01-def-biholomorphisme]]). $\square$

## Preuve à trous

$h$ est holomorphe sur $\C\setminus\{-1\}\supset D$. En multipliant par la quantité conjuguée $1+\bar z$, on trouve <trou indice="développer $(1-z)(1+\bar z)$">$\Im h(z)=\frac{1-|z|^2}{|1+z|^2}$</trou>, donc $h(D)\subset H$.

En résolvant $w(1+z)=i(1-z)$, on obtient la candidate réciproque <trou>$g(w)=\frac{i-w}{i+w}$, holomorphe sur $\C\setminus\{-i\}\supset H$</trou>. Elle envoie $H$ dans $D$ car, pour $w=a+ib$, <trou indice="comparer les distances de $w$ à $i$ et à $-i$">$|i+w|^2-|i-w|^2=4b>0$</trou>.

Enfin on vérifie $h\circ g=\mathrm{id}_H$ et $g\circ h=\mathrm{id}_D$ par calcul direct ; $h$ est donc une bijection holomorphe de $D$ sur $H$ de réciproque holomorphe. $\square$

## Exemples

* **Quelques images.** $h(0)=i$, $h(1)=0$, $h(i)=i\frac{1-i}{1+i}=i\frac{(1-i)^2}{2}=1$, $h(-i)=-1$. Le segment $]-1,1[$ est envoyé sur la demi-droite $i\,]0,+\infty[$ (car $h(x)=i\frac{1-x}{1+x}$ avec $\frac{1-x}{1+x}$ décrivant $]0,+\infty[$), et le cercle unité privé de $-1$ sur $\R$ via $e^{i\theta}\mapsto\tan\frac\theta2$.
* **Transporter un automorphisme.** La rotation $\varphi(z)=-z$ est un automorphisme de $D$. Alors $h\circ\varphi\circ h^{-1}$ est un automorphisme de $H$ (composée de biholomorphismes, [[ch01-groupe-automorphismes]]). Avec $u=-g(w)=\frac{w-i}{w+i}$ : $1-u=\frac{2i}{w+i}$, $1+u=\frac{2w}{w+i}$, donc $h(u)=i\frac{2i}{2w}=-\frac1w$. On obtient l'automorphisme $w\mapsto-\frac1w$ de $H$ (vérification directe : $\Im(-1/w)=\frac{\Im w}{|w|^2}>0$).
* **Fonctions bornées.** Toute fonction holomorphe bornée $F$ sur $H$ donne $F\circ h$ holomorphe bornée sur $D$, et réciproquement. En revanche, aucun biholomorphisme n'existe entre $\C$ et $D$ ou $H$ (Liouville, [[ch01-liouville]]) : $H$ « ressemble » à $\C$ par sa taille, mais il est biholomorphe au disque.

## Pièges

* > ⚠️ Ne pas confondre $h(z)=i\frac{1-z}{1+z}$ (de $D$ vers $H$) et l'application $w\mapsto\frac{w-i}{w+i}=-h^{-1}(w)$ (de $H$ vers $D$, aussi appelée transformation de Cayley). Vérifier le sens sur un point : $h(0)=i\in H$.
* Le pôle $-1$ de $h$ est **sur le bord** de $D$, pas dedans : c'est indispensable pour que l'image soit non bornée.
* Pour prouver qu'une application est un biholomorphisme, ne pas oublier la **surjectivité** : exhiber la réciproque est le plus sûr (ou utiliser [[ch01-bijection-holomorphe-reciproque-holomorphe]] une fois la bijectivité établie).
* $h$ n'est pas une similitude globale : les cercles centrés en $0$ ne sont pas envoyés sur des cercles centrés en $i$ (seule la conformité locale, conservation des angles, est garantie, [[ch01-similitude-conforme]]).
