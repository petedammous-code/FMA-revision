---
id: ch01-lemme-schwarz
type: lemma
chapter: 1
title: Lemme de Schwarz
ref: Lemme I.13.1
page: 32
importance: 3
depends: [ch01-estimees-cauchy, ch01-principe-maximum, ch01-maximum-sur-le-bord, ch01-def-biholomorphisme, ch01-serie-entiere-holomorphe]
tags: [schwarz, disque-unite, principe-maximum, automorphisme, rotation]
---
## Intuition

> 💡 Une fonction holomorphe qui envoie le disque unité dans lui-même et fixe le centre **ne peut que contracter** : chaque point $z$ est envoyé au plus aussi loin du centre qu'il ne l'était, $|f(z)|\le|z|$. La seule façon de ne rien contracter du tout est de tourner le disque (une rotation $z\mapsto e^{i\theta}z$).

Mécanisme : comme $f(0)=0$, on peut diviser par $z$ ; la fonction $g(z)=f(z)/z$ reste holomorphe (la singularité en $0$ est fictive), et sur le cercle $|z|=r$ elle est bornée par $1/r$. Le [[ch01-principe-maximum|principe du maximum]] propage cette borne à l'intérieur, et en faisant $r\to1$ on obtient $|g|\le1$.

Notations du poly : $D=D(0,1)$ disque unité ouvert, $\bar D$ son adhérence, $D^\times=D\setminus\{0\}$. Un **automorphisme** de $D$ est une bijection holomorphe $D\to D$ dont la réciproque est holomorphe ([[ch01-def-biholomorphisme]]). Une **rotation** est une application $z\mapsto e^{i\theta}z$, $\theta\in\R$.

## Énoncé

**Lemme (poly, Lemme I.13.1 — Schwarz, p. 32).** Soit $f\in\Hol(D)$ telle que $f(D)\subset\bar D(0,1)$ et telle que $f(0)=0$. Alors

1. $|f(z)|\le|z|$ pour tout $z\in D$ et $|f'(0)|\le1$.
2. S'il existe $z\in D^\times$ tel que $|f(z)|=|z|$ ou que $|f'(0)|=1$ alors $f$ est une rotation, c'est-à-dire qu'il existe $\theta\in\R$ tel que $f(z)=e^{i\theta}z$ pour tout $z\in D$.
3. Si $f$ est un automorphisme de $D$ (cf. Définition I.4.1) alors $f$ est une rotation.
4. Si $f$ n'est pas un automorphisme de $D$, alors $|f(z)|<|z|$ pour tout $z\in D\setminus\{0\}$.

## Hypothèses

### H1 — $f$ holomorphe sur $D$

**Rôle.** Elle donne le développement en série entière de $f$ sur tout $D$, donc l'holomorphie de $g(z)=f(z)/z$, et permet d'appliquer le principe du maximum à $g$.

**Si on la retire.**
* $f(z)=\sqrt{|z|}$ : continue, $f(0)=0$, $f(D)\subset\bar D$, mais $|f(z)|=|z|^{1/2}>|z|$ pour $0<|z|<1$ : le point 1 est faux.
* $f(z)=\bar z$ : $f(0)=0$, $f$ est une bijection de $D$ sur $D$ avec $|f(z)|=|z|$, mais ce n'est pas une rotation : les points 2 et 3 sont faux.

### H2 — $f(D)\subset\bar D(0,1)$

**Rôle.** Elle donne $|f(w)|\le1$ sur chaque cercle $C(0,r)$, donc $|g|\le1/r$ sur ce cercle.

**Si on la retire.** $f(z)=2z$ : holomorphe, $f(0)=0$, mais $|f(z)|=2|z|>|z|$ sur $D^\times$ et $f'(0)=2$.

### H3 — $f(0)=0$

**Rôle.** C'est elle qui permet de factoriser $f(z)=z\,g(z)$ avec $g$ holomorphe.

**Si on la retire.**
* $f\equiv\tfrac12$ : $|f(z)|=\tfrac12>|z|$ pour $|z|<\tfrac12$ ; le point 1 est faux (l'inégalité $|f'(0)|\le1$ survit, mais par un autre argument).
* $f(z)=\dfrac{z-1/2}{1-z/2}$ est un automorphisme de $D$ ([[ch01-automorphismes-disque]]) qui n'est pas une rotation ($f(0)=-\tfrac12\neq0$) : le point 3 est faux. C'est pourquoi, pour étudier un automorphisme quelconque, on se ramène au cas $f(0)=0$ en composant par un tel $f_a$.

## Idée de la preuve

$g(z)=f(z)/z$ (prolongée par $f'(0)$ en $0$) est holomorphe sur $D$ ; par le principe du maximum sur $\bar D(0,r)$, $|g|\le1/r$, puis $r\to1$ donne $|g|\le1$. Égalité en un point intérieur $\Rightarrow$ $g$ constante de module $1$. Pour un automorphisme, on applique 1 à $f$ et à $f^{-1}$.

## Preuve

*Le poly laisse la preuve au lecteur ; voici la preuve classique, avec les outils du poly.*

**Construction de $g$.** Pour tout $r\in]0,1[$, $\bar D(0,r)\subset D$, donc par les [[ch01-estimees-cauchy]] (poly, Corollaire I.7.5, p. 22) $f$ est somme de sa série de Taylor en $0$ sur $D(0,1)$ entier : $f(z)=\sum_{n\ge0}a_nz^n$ pour $|z|<1$, avec $a_n=f^{(n)}(0)/n!$, et $a_0=f(0)=0$. La série entière $\sum_{n\ge0}a_{n+1}z^n$ a le même rayon de convergence ($\ge1$) ; elle définit donc une fonction $g\in\Hol(D)$ ([[ch01-serie-entiere-holomorphe]]) telle que
$$
f(z)=z\,g(z)\quad(z\in D),\qquad g(z)=\frac{f(z)}{z}\ (z\neq0),\qquad g(0)=a_1=f'(0).
$$

**Point 1.** Fixons $r\in]0,1[$. La fonction $g$ est continue sur $\bar D(0,r)\subset D$ et holomorphe sur le disque $D(0,r)$, ouvert connexe borné. Par [[ch01-maximum-sur-le-bord]] (poly, Corollaire I.12.2, p. 31) et l'hypothèse $|f|\le1$ :
$$
\sup_{\bar D(0,r)}|g|=\sup_{|w|=r}\frac{|f(w)|}{r}\le\frac1r .
$$
Soit $z\in D$. Pour tout $r\in]|z|,1[$, on a donc $|g(z)|\le1/r$ ; en faisant $r\to1$, $|g(z)|\le1$. Ainsi $|g|\le1$ sur $D$, c'est-à-dire $|f(z)|=|z|\,|g(z)|\le|z|$ pour tout $z\in D$, et $|f'(0)|=|g(0)|\le1$.

**Point 2.** Si $|f(z_1)|=|z_1|$ pour un $z_1\in D^\times$, alors $|g(z_1)|=1$ ; si $|f'(0)|=1$, alors $|g(0)|=1$. Dans les deux cas, $|g|$ atteint en un point de $D$ la valeur $1=\sup_D|g|$ : c'est un maximum (global, donc local) de $|g|$. Comme $D$ est connexe, le [[ch01-principe-maximum|principe du maximum]] (poly, Théorème I.12.1, p. 29) dit que $g$ est constante, égale à une constante $c$ de module $1$ : $c=e^{i\theta}$ avec $\theta\in\R$, et $f(z)=e^{i\theta}z$ sur $D$.

**Point 3.** Supposons que $f$ soit un automorphisme de $D$. Sa réciproque $f^{-1}:D\to D$ est holomorphe, vérifie $f^{-1}(D)=D\subset\bar D(0,1)$ et $f^{-1}(0)=0$ (puisque $f(0)=0$). Le point 1 appliqué à $f^{-1}$ donne $|f^{-1}(w)|\le|w|$ pour tout $w\in D$ ; avec $w=f(z)$ : $|z|\le|f(z)|$. Combiné au point 1 pour $f$, on obtient $|f(z)|=|z|$ pour tout $z\in D$, en particulier pour un $z\in D^\times$, et le point 2 conclut : $f$ est une rotation.

**Point 4.** Par contraposée : supposons qu'il existe $z_1\in D\setminus\{0\}$ avec $|f(z_1)|\ge|z_1|$. Par le point 1, $|f(z_1)|=|z_1|$, donc $f(z)=e^{i\theta}z$ par le point 2. Une rotation est un automorphisme de $D$ (bijection de $D$ sur $D$, de réciproque $w\mapsto e^{-i\theta}w$ holomorphe). Donc si $f$ n'est pas un automorphisme, $|f(z)|<|z|$ pour tout $z\in D\setminus\{0\}$. $\square$

## Preuve à trous

Comme $f(0)=0$ et que $f$ est développable en série entière sur $D$, on écrit <trou indice="diviser par z">$f(z)=z\,g(z)$ avec $g(z)=\sum_{n\ge0}a_{n+1}z^n$ holomorphe sur $D$ et $g(0)=f'(0)$</trou>.

**1.** Pour $0<r<1$, le principe du maximum sur $\bar D(0,r)$ donne <trou>$\sup_{\bar D(0,r)}|g|=\sup_{|w|=r}|f(w)|/r\le1/r$</trou> ; pour $z$ fixé et $r\to1$, $|g(z)|\le1$, d'où $|f(z)|\le|z|$ et $|f'(0)|=|g(0)|\le1$.

**2.** Si $|f(z_1)|=|z_1|$ avec $z_1\neq0$, ou si $|f'(0)|=1$, alors <trou indice="où |g| atteint-il sa borne ?">$|g|$ atteint son maximum $1$ en un point intérieur de $D$ connexe, donc $g$ est constante de module $1$</trou> : $f(z)=e^{i\theta}z$.

**3.** Si $f$ est un automorphisme, <trou indice="appliquer 1 deux fois">le point 1 appliqué à $f^{-1}$ (qui fixe $0$) donne $|z|\le|f(z)|$, donc $|f(z)|=|z|$ partout</trou>, et le point 2 conclut.

**4.** Sinon, une égalité $|f(z_1)|=|z_1|$ avec $z_1\neq0$ ferait de $f$ une rotation, donc un automorphisme. $\square$

## Exemples

* **$f(z)=z^2$.** $f\in\Hol(D)$, $f(D)\subset D$, $f(0)=0$ : $|z^2|<|z|$ sur $D^\times$, et $f'(0)=0$. Ce n'est pas un automorphisme ($f(\tfrac12)=f(-\tfrac12)$), en accord avec le point 4.
* **Contrainte sur les valeurs.** Il n'existe pas de $f\in\Hol(D)$ avec $f(D)\subset D$, $f(0)=0$ et $f(\tfrac12)=\tfrac34$, puisque $|f(\tfrac12)|\le\tfrac12$. Et si $f(\tfrac12)=\tfrac i2$, alors $|f(\tfrac12)|=|\tfrac12|$, donc $f$ est une rotation : $e^{i\theta}\cdot\tfrac12=\tfrac i2$ impose $f(z)=iz$.
* **Version sur un disque quelconque.** Si $F\in\Hol(D(0,R))$, $|F|\le M$ et $F(0)=0$, alors $f(z):=F(Rz)/M$ vérifie les hypothèses, d'où $|F(w)|\le\dfrac{M}{R}|w|$ pour $|w|<R$ et $|F'(0)|\le\dfrac MR$. (Pour $F(0)=0$, c'est mieux que l'estimée de Cauchy à l'ordre $0$, qui ne donnerait que $|F(w)|\le M$.)

## Pièges

* > ⚠️ L'hypothèse $f(0)=0$ est indispensable ; si elle manque, se ramener à ce cas en composant par un automorphisme $f_a(z)=\dfrac{z-a}{1-\bar az}$ ([[ch01-automorphismes-disque]]).
* La conclusion d'égalité est « $f(z)=e^{i\theta}z$ », pas « $f$ constante de module 1 » : c'est $g=f/z$ qui est constante.
* Le principe du maximum s'applique à $g$, **pas** à $f$ ; et on ne peut pas l'appliquer directement sur $\bar D$ (on ne sait rien de $f$ sur le cercle unité) : il faut passer par $\bar D(0,r)$ puis $r\to1$.
* Le lemme vit sur le disque : sur $\C$, $f(z)=z^2$ vérifie $f(0)=0$ mais $|f(z)|>|z|$ pour $|z|>1$ (et aucune borne n'est disponible).
* Le point 4 ne dit pas que $f$ est injective ou non ; il compare « automorphisme » à « contraction stricte ». Pour un non-automorphisme, on a aussi $|f'(0)|<1$ (sinon $f$ serait une rotation par le point 2).
